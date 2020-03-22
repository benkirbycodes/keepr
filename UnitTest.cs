// using Xunit;
// using Keepr.Services;
// using Keepr.Repositories;
// using System.Collections.Generic;
// using Keepr.Models;
// using System.Data;
// using Moq;
// using Keepr.Interfaces;
// using System.Linq;

// namespace Keepr
// {
//   public class KeepsServiceTests
//   {
//     private readonly KeepsService keepsService;
//     private readonly Mock<IKeepsRepository> moqKeepsRepository;


//     public KeepsServiceTests()
//     {
//       moqKeepsRepository = new Mock<IKeepsRepository>();
//       keepsService = new KeepsService(moqKeepsRepository.Object);
//     }

//     [Fact] //Checks if Get returns List<Keep>
//     public void CanGetResults()
//     {
//       moqKeepsRepository.Setup(repo => repo.Get()).Returns(new List<Keep>());

//       var result = keepsService.Get();

//       Assert.Equal(new List<Keep>(), result);
//     }



//     [Fact] //Checks if GetPrivate returns private keep
//     public void CanGetPrivate()
//     {
//       moqKeepsRepository.Setup(repo => repo.GetPrivate()).Returns(new List<Keep>{
//           new Keep {IsPrivate= true}
//         });
//       var result = keepsService.GetPrivate();

//       Assert.True(result.First().IsPrivate);
//     }

//     [Fact] //Tests if GetById can get by Id
//     public void CanGetById()
//     {
//       moqKeepsRepository.Setup(repo => repo.GetById(1)).Returns(
//           new Keep { Id = 1 }
//         );
//       var result = keepsService.GetById(1);

//       Assert.Equal(1, result.Id);
//       Assert.NotEqual(2, result.Id);
//     }

//     [Fact]
//     public void CanCreate()
//     {
//       Keep newKeep = new Keep { Name = "newKeep" };

//       moqKeepsRepository.Setup(repo => repo.Create(newKeep)).Returns(newKeep);

//       var result = keepsService.Create(newKeep);

//       Assert.Equal(newKeep, result);
//     }

//     // [Fact] //How do I test a method that calls another method inside it? Something to do with Dependancy Injection. Pass instance of Interface as an arg?
//     public void CanEdit()
//     {

//     }


//   }

// }