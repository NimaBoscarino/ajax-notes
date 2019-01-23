function loadDogs () {
  $.get('http://localhost:5000/dogs')
  .then(dogs => {
    dogs.forEach(dog => {
      let dogElement = createDogElement(dog)
      renderDog(dogElement)
    })
  })
}

function createDogElement(dog) {
  let newDogElement = $('<div class="dog">')
  let dogNameP = $(`<p>${dog.name}</p>`)
  let dogBreed = $(`<p>Corgi</p>`)
  newDogElement.append(dogNameP)
  newDogElement.append(dogBreed)

  return newDogElement
}

function renderDog(dog) {
  $('body').append(dog)
}

$('#new-dog-form').on('submit', function (event) {
  event.preventDefault();
  let newDogData = $(this).serialize() // name=spot&breed=corgi

  // let newDogName = $('input[name=dog-name]').val()

  postDog(newDogData)

})

function postDog(dogData) {
  $.post('http://localhost:5000/dogs', dogData).then(dog => {
    let dogElement = createDogElement(dog)
    renderDog(dogElement)
  })
}

loadDogs()