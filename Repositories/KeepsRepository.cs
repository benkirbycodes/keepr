using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;
using Keepr.Interfaces;

namespace Keepr.Repositories
{
  public class KeepsRepository : IKeepsRepository
  {

    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }


    public IEnumerable<Keep> Get()
    {
      string sql = "SELECT * FROM keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }

    public IEnumerable<Keep> GetPrivate()
    {
      string sql = "SELECT * FROM keeps";
      return _db.Query<Keep>(sql);
    }

    public Keep GetById(int Id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { Id });
    }

    public Keep Create(Keep keepData)
    {
      string sql = @"
            INSERT INTO keeps
            (name, description, img, isPrivate, views, shares, keeps, userId)
            VALUES 
            (@Name, @Description, @Img, @IsPrivate, @Views, @Shares, @Keeps, @UserId);
            SELECT LAST_INSERT_ID();
            ";
      int id = _db.ExecuteScalar<int>(sql, keepData);
      keepData.Id = id;
      return keepData;
    }

    public void Edit(Keep update)
    {
      string sql = @"
        UPDATE keeps
        SET 
        name = @Name, description = @Description, img = @Img, isPrivate = @IsPrivate, views = @Views, shares = @Shares, keeps = @Keeps
        WHERE id = @Id;";
      _db.Execute(sql, update);

    }
    public void Delete(int Id)
    {
      string sql = "DELETE FROM keeps WHERE id = @Id";
      _db.Execute(sql, new { Id });
    }
  }
}