using System.Collections.Generic;
using Keepr.Models;

namespace Keepr.Interfaces
{
  public interface IVaultsRepository
  {
    Vault GetById(int Id);

    Vault Create(Vault vaultData);

    void Delete(int Id);
    IEnumerable<Vault> Get();
  }
}