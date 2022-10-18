// document.addEventListener(`DOMContentLoaded`, () => {
//     p = document.getElementById(`text`)
//     p.textContent = `This is really cool!`
// })

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }
  