let count = 0

$('button').click(function(ev) {
  ev.preventDefault();
  count++
  $.get( `https://jsonplaceholder.typicode.com/todos/${count}`, function( data ) {
    console.log(data)
  }); 
})

