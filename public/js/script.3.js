
$('body').click(function () {
  
  $.post('https://jsonplaceholder.typicode.com/posts', {
    message: 'howdy do'
  }).then(data => {
    console.log(data)
    let newP = $('<p>')
    newP.append(data.message)
    $('body').append(newP)
  })
  
})