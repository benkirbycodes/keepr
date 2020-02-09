using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
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
    internal string Delete(int vaultId, int keepId)
    {
      var exists = _repo.GetById(vaultId, keepId);
      if (exists == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(exists.Id);
      return "Successfully Deleted";
    }

  }
}