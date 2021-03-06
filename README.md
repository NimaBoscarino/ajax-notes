# W3D3 AJAX


[REPO with some code](https://github.com/NimaBoscarino/ajax-notes.git)

[REPO for Dogbook!](https://github.com/NimaBoscarino/dogbook)


Here are some notes by KV (the demo they do is similar to what we did): https://gist.github.com/kvirani/c06a5ac421b8764a1e18a1a796962192

Karl's notes are also very good: https://github.com/jensen/ajax-notes

Blog post about AJAX: http://adaptivepath.org/ideas/ajax-new-approach-web-applications/

Today we talked about AJAX, where it comes from, and what it's used for! We looked at how to use jQuery to make AJAX requests via $.get and $.ajax (to let us make POST requests with data), so that we could build websites that don't need to refresh to show new data.

The basic idea is that websites can respond to our interactions and redraw the DOM on the fly to reflect new data. Super cool!

Ajax stands for asynchronous javascript and xml.

1. What is AJAX?
  - is not a "thing"
  - it is a strategy
  - "modifying the DOM based on certain data"
  - "programmatically requesting and processing data"

2. How do we use AJAX?

```js
$.ajax('https://jsonplaceholder.typicode.com/posts', {
	success: function (data) {
		console.log(data)
	}
})
```

```js
$.ajax('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	data: {
    	message: 'howdy',
	},
	success: function (data) {
		console.log(data)
	}
})
```

```js
$.ajax('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))

$.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))

$.post('https://jsonplaceholder.typicode.com/posts', {
  message: 'howdy do'
}).then(data => console.log(data))
```

```js
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
```

For form stuff, remember to use `e.preventDefault()` to prevent the form from submitting! Also

As always, make sure you take a good look at the documentation: http://api.jquery.com/jquery.ajax/

You can run the server in this repo with `npm start` (after `npm install` of course), and then navigate to `http://localhost:5000` to see the dog demo! Enjoy :)