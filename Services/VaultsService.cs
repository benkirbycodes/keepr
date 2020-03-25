using System;
using System.Collections.Generic;
using Keepr.Interfaces;
using Keepr.Models;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly IVaultsRepository _repo;
    public VaultsService(IVaultsRepository repo)
    {
      _repo = repo;
    }
    internal Vault GetById(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      return exists;
    }
    internal Vault Create(Vault newVault)
    {
      _repo.Create(newVault);
      return newVault;
    }
    internal string Delete(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      _repo.Delete(id);
      return "Successfully Deleted";
    }

    internal IEnumerable<Vault> Get()
    {
      return _repo.Get();
    }
  }
}