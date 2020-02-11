using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VaultKeepsController : ControllerBase
  {
    private readonly VaultKeepsService _vks;
    private readonly KeepsService _ks;
    public VaultKeepsController(VaultKeepsService vks, KeepsService ks)
    {
      _vks = vks;
      _ks = ks;
    }

    [HttpGet("{id}/keeps")]
    [Authorize]

    public ActionResult<IEnumerable<Keep>> GetByVaultId(int id)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        return Ok(_vks.GetByVaultId(id, userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public ActionResult<VaultKeep> Post([FromBody] VaultKeep newVaultKeep)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newVaultKeep.UserId = userId;
        int updateId = newVaultKeep.KeepId;
        int vaultId = newVaultKeep.VaultId;
        Keep update = _ks.GetById(updateId);
        _vks.IncrementKeepCount(update, vaultId, userId);
        return Ok(_vks.Create(newVaultKeep));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }


    [HttpDelete("{vaultId}/keeps/{keepId}")]
    [Authorize]

    public ActionResult<String> Delete(int vaultId, int keepId)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        Keep update = _ks.GetById(keepId);
        _vks.DecrementKeepCount(update);
        return Ok(_vks.Delete(vaultId, keepId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}