// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
all = document.querySelectorAll('.like-glyph')

all.forEach(a => {
//document.querySelector(".like-glyph")
a.addEventListener('click', (e) => {
    mimicServerCall().then(() => {
      if (e.target.innerHTML == EMPTY_HEART) {
      e.target.innerHTML = FULL_HEART
      e.target.classList.add("activated-heart")
      }
      else { 
        e.target.innerHTML = EMPTY_HEART
        e.target.classList.remove("activated-heart")

      }
    })
    .catch((e) => {
      document.querySelector("#modal").classList.remove("hidden")
      setTimeout(document.querySelector("#modal").classList.add("hidden"), 3000)
      console.log("???")
    })

})
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
