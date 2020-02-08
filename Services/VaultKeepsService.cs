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
    internal VaultKeep GetByVaultId(int id)
    {
      var exists = _repo.GetByVaultId(id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      return exists;
    }
    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      _repo.Create(newVaultKeep);
      return newVaultKeep;
    }
    internal string Delete(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(id);
      return "Successfully Deleted";
    }

  }
}