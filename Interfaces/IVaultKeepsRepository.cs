using System.Collections.Generic;
using Keepr.Models;

namespace Keepr.Interfaces
{
  public interface IVaultKeepsRepository
  {
    IEnumerable<Keep> GetByVaultId(int vaultId, string userId);
    VaultKeep GetById(int vaultId, int keepId);
    VaultKeep Create(VaultKeep vaultKeepData);
    void Delete(int Id);

  }
}