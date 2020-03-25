using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Keepr.Interfaces;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly IVaultKeepsRepository _repo;
    private readonly IKeepsRepository _keepsRepo;
    public VaultKeepsService(IVaultKeepsRepository repo, IKeepsRepository keepsRepo)
    {
      _repo = repo;
      _keepsRepo = keepsRepo;
    }
    internal IEnumerable<Keep> GetByVaultId(int id, string userId)
    {
      var exists = _repo.GetByVaultId(id, userId);
      if (exists == null) { throw new Exception("Invalid Id"); }
      return exists;
    }
    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      _repo.Create(newVaultKeep);
      return newVaultKeep;
    }
    internal void IncrementKeepCount(Keep update, int vaultId, string userId)
    {
      var check = _repo.GetByVaultId(vaultId, userId);
      if (!check.Any(k => k.Id.Equals(update.Id)))
      {
        update.Keeps++;
        _keepsRepo.Edit(update);
      }
    }
    internal void DecrementKeepCount(Keep update)
    {
      update.Keeps--;
      _keepsRepo.Edit(update);
    }
    internal string Delete(int vaultId, int keepId)
    {
      var exists = _repo.GetById(vaultId, keepId);
      if (exists == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(exists.Id);
      return "Successfully Deleted";
    }
  }
}