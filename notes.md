# W3D3 - AJAX

- asynchronous code

- asynchronous javascript and xml
  - extensible markup language

* STAND UP RIGHT AFTER LECTURE *

1. What is AJAX?
  - is not a "thing"
  - is a strategy
  - "modifying the DOM based on certain data"
  - "programmatically requesting and processing data"

2. How do we use AJAX?

$.ajax('https://jsonplaceholder.typicode.com/posts', {
	success: function (data) {
		console.log(data)
	}
})

$.ajax('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	data: {
    	message: 'howdy',
	},
	success: function (data) {
		console.log(data)
	}
})

$.ajax('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))

$.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))

$.post('https://jsonplaceholder.typicode.com/posts', {
  message: 'howdy do'
}).then(data => console.log(data))

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

3. Why do we want AJAX?


4. Where is AJAX? Who is AJAX?