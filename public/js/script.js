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

$('#add-dog').on('click', function (event) {
  event.preventDefault();

  let newDogName = $('input[name=dog-name]').val()

  postDog(newDogName)

})

function postDog(dogName) {
  $.post('http://localhost:5000/dogs', {
    dog: dogName
  }).then(dog => {
    let dogElement = createDogElement(dog)
    renderDog(dogElement)
  })
}

loadDogs()