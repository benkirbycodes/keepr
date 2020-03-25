using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;
using Keepr.Interfaces;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository : IVaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }



    public IEnumerable<Keep> GetByVaultId(int vaultId, string userId)
    {
      string sql = "SELECT k.* FROM vaultkeeps vk INNER JOIN keeps k ON k.id = vk.keepId WHERE (vaultId = @vaultId AND vk.userId = @userId);";
      return _db.Query<Keep>(sql, new { vaultId, userId });
    }
    public VaultKeep GetById(int vaultId, int keepId)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE (vaultId = @vaultId AND keepId = @keepId)";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { vaultId, keepId });

    }

    public VaultKeep Create(VaultKeep vaultKeepData)
    {
      string sql = @"
            REPLACE INTO vaultkeeps
            (vaultId, keepId, userId)
            VALUES 
            (@VaultId, @KeepId, @UserId);
            SELECT LAST_INSERT_ID();
            ";
      int id = _db.ExecuteScalar<int>(sql, vaultKeepData);
      vaultKeepData.Id = id;
      return vaultKeepData;
    }


    public void Delete(int Id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @Id";
      _db.Execute(sql, new { Id });
    }
  }
}