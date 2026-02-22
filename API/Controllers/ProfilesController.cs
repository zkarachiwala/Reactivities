using Application.Profiles.Commands;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProfilesController : BaseApiController
{
    [HttpPost("add-photo")]
    public async Task<IActionResult> AddPhoto(IFormFile file)
    {
        var command = new AddPhoto.Command { File = file };
        var result = await Mediator.Send(command);
        return HandleResult(result);
    }
}
