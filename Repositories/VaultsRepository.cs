using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;
using Keepr.Interfaces;

namespace Keepr.Repositories
{
  public class VaultsRepository : IVaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }



    public Vault GetById(int Id)
    {
      string sql = "SELECT * FROM vaults WHERE id = @Id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { Id });
    }

    public Vault Create(Vault vaultData)
    {
      string sql = @"
            INSERT INTO vaults
            (name, description, userId)
            VALUES 
            (@Name, @Description, @UserId);
            SELECT LAST_INSERT_ID();
            ";
      int id = _db.ExecuteScalar<int>(sql, vaultData);
      vaultData.Id = id;
      return vaultData;
    }


    public void Delete(int Id)
    {
      string sql = "DELETE FROM vaults WHERE id = @Id";
      _db.Execute(sql, new { Id });
    }

    public IEnumerable<Vault> Get()
    {
      string sql = @"SELECT * FROM vaults";
      return _db.Query<Vault>(sql);
    }
  }
}