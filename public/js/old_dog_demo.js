

// $('button').click(function(ev) {
//   ev.preventDefault();

//   $.get(`https://dog.ceo/api/breeds/image/random`)
//     .then(renderDog)
// })

function getDogPicture(cb) {
  $.get(`https://dog.ceo/api/breeds/image/random`)
    .then(cb)
}

function renderDog(dog) {
  getDogPicture((response) => {
    let dogElement = `
    <div>
      <h2>${dog.name}</h2>
      <img src="${response.message}" />
    </div>
    `
    $('#dog-container').prepend(dogElement)
  
  })
}
//     <img src=${response.message} />

function loadDogs() {
  // makes a request to /dogs
  $.get('/dogs')
    .then((dogs) => {
      dogs.forEach(dog => {
        renderDog(dog)
      })
    })
}

$('form').submit(function(ev) {
  ev.preventDefault();
  const $form = $(this);
  // how do we handle this?
  $.ajax({
    type: 'POST',
    url:  '/dogs',
    beforeSend: () => {
      // display 
    },
    data: $form.serialize()
  }).then((dog) => {
    renderDog(dog)
    // remove that spinner
  })

})


$(() => {
  loadDogs()
})