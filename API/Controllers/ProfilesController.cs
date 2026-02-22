using Application.Profiles.Commands;
using Application.Profiles.Queries;
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

    [HttpGet("{userId}/photos")]
    public async Task<IActionResult> GetPhotos(string userId)
    {
        var query = new GetProfilePhotos.Query { UserId = userId };
        var result = await Mediator.Send(query);
        return HandleResult(result);
    }

    [HttpDelete("{photoId}/photos")]
    public async Task<IActionResult> DeletePhoto(string photoId)
    {
        var command = new DeletePhoto.Command { PhotoId = photoId };
        var result = await Mediator.Send(command);
        return HandleResult(result);
    }

    [HttpPut("{photoId}/setMain")]
    public async Task<IActionResult> SetMainPhoto(string photoId)
    {
        var command = new SetMainPhoto.Command { PhotoId = photoId };
        var result = await Mediator.Send(command);
        return HandleResult(result);
    }
}
