// using Xunit;
// using Keepr.Services;
// using Keepr.Repositories;
// using System.Collections.Generic;
// using Keepr.Models;
// using System.Data;
// using Moq;
// using Keepr.Interfaces;

// namespace Keepr
// {
//   public class Test
//   {


//     [Fact]
//     public void PassingTest()
//     {
//       Assert.Equal(4, Add(2, 2));
//     }

//     [Fact]
//     public void FailingTest()
//     {
//       Assert.Equal(5, Add(2, 2));
//     }

//     int Add(int x, int y)
//     {
//       return x + y;
//     }



//     [Theory]
//     [InlineData(3)]
//     [InlineData(5)]
//     [InlineData(6)]
//     public void MyFirstTheory(int value)
//     {
//       Assert.True(IsOdd(value));
//     }

//     bool IsOdd(int value)
//     {
//       return value % 2 == 1;
//     }



//     [Theory]
//     [InlineData("an")]
//     public void MySecondTheory(string value)
//     {
//       Assert.True(IsAn(value));
//     }
//     bool IsAn(string value)
//     {
//       return value == "an";
//     }






//     [Theory]
//     [MemberData(nameof(Data))]
//     public void CanFilter(string filters, List<Keep> expected)
//     {

//       var _repo = new Mock<IKeepsRepository>();
//       _repo.Setup(repo => repo.Get()).Returns();
//   //Returns should be whatever .Get() would normall return
//       //Moq verify look up 

//       var keepsService = new KeepsService(_repo.Object);

//       var result = keepsService.GetFiltered(filters);

//       Assert.Equal(expected, result);
//     }
//     public static IEnumerable<object[]> Data
//     {
//       get
//       {
//         List<Keep> list = new List<Keep>()
//           {
//             new Keep() { Name = "ansel adams", Description = "photograph" },
//             new Keep() { Name = "wassily kandinsky", Description = "painting" }
//           };


//         return new List<object[]>
//         {
//                 new object[] { "ansel", list[0]},
//                 new object[] { "an", list},
//                 new object[] { "photo", list[0]},
//                 new object[] { "paint", list[1]},
//                 new object[] {"this",  null}
//         };
//       }
//     }
//   }

// }