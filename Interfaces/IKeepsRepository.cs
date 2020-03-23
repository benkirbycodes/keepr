using System.Collections.Generic;
using Keepr.Models;

namespace Keepr.Interfaces
{
  public interface IKeepsRepository<Keep>
  {
    IEnumerable<Keep> Get();
    IEnumerable<Keep> GetPrivate();

    Keep GetById(int Id);

    Keep Create(Keep keepData);
    void Edit(Keep update);
    void Delete(int Id);
  }
}