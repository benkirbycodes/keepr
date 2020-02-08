using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }



    internal VaultKeep GetByVaultId(int VaultId)
    {
      string sql = "SELECT k.* FROM vaultkeeps vk INNER JOIN keeps k ON k.id = vk.keepId WHERE (vaultId = @VaultId AND vk.UserId = @UserId);";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { VaultId });
    }
    internal VaultKeep GetById(int Id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { Id });

    }

    internal VaultKeep Create(VaultKeep vaultKeepData)
    {
      string sql = @"
            INSERT INTO vaultkeeps
            (vaultId, keepId)
            VALUES 
            (@VaultId, @KeepId);
            SELECT LAST_INSERT_ID();
            ";
      int id = _db.ExecuteScalar<int>(sql, vaultKeepData);
      vaultKeepData.Id = id;
      return vaultKeepData;
    }


    internal void Delete(int Id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @Id";
      _db.Execute(sql, new { Id });
    }
  }
}