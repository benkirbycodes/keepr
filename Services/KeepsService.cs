using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Keepr.Models;
using Keepr.Repositories;


namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public List<Keep> Filtered { get; set; } = new List<Keep>();
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {

      return _repo.Get();
    }
    public IEnumerable<Keep> GetFiltered(string name)
    {
      var results = _repo.Get();

      //Parsing string into Filters string[]
      name = name.Replace('_', ' ').ToLower();
      string[] Filters = name.Split('-');

      //Filter 'results' for matches in 'Filters'
      foreach (var result in results)
      {
        string lowerName = result.Name.ToLower();
        foreach (var filterName in Filters)
        {
          if (lowerName.Contains(filterName))
          {
            Filtered.Add(result);

          }
        }

      }
      return Filtered;
    }
    public IEnumerable<Keep> GetPrivate()
    {
      return _repo.GetPrivate();
    }
    internal Keep GetById(int id)
    {
      var exists = _repo.GetById(id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      else if (exists.IsPrivate) { throw new Exception("This Keep Is Private"); }
      exists.Views++;
      _repo.Edit(exists);
      return exists;
    }

    internal Keep Create(Keep newKeep)
    {
      _repo.Create(newKeep);
      return newKeep;
    }

    internal Keep Edit(Keep update)
    {
      var exists = _repo.GetById(update.Id);
      if (exists == null) { throw new Exception("Invalid Id"); }
      _repo.Edit(update);
      return update;
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