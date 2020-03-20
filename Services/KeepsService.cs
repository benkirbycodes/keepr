using System;
using System.Collections.Generic;
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
    public IEnumerable<Keep> GetFiltered(string filters)
    {
      var results = _repo.Get();

      //Parsing string into Filters string[]
      filters = filters.Replace('_', ' ').ToLower();
      string[] Filters = filters.Split('-');

      //Filter 'results' for those that contain filters in Name or Desc
      foreach (var result in results)
      {
        string lowerName = result.Name.ToLower();
        string lowerDesc = result.Description.ToLower();

        foreach (var filterName in Filters)
        {
          if (lowerName.Contains(filterName))
          {
            if (!Filtered.Contains(result))
            {
              Filtered.Add(result);
            }
          }
          else if (lowerDesc.Contains(filterName))
          {
            if (!Filtered.Contains(result))
            {
              Filtered.Add(result);
            }
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