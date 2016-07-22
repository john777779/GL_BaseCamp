function doAjaxCall(url, method, onSuccess, onError) {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                onSuccess(httpRequest.responseText);
            } else {
                onError();
            }
        }
    };

    httpRequest.open(method, url);
    httpRequest.send();

}


/*
 ​
 API
 ​
      GET api/books/:id -> get Book detais { id: 15, name: 'The Adventures of Tom Sawyer', authorId: 25 }
 ​
      GET api/authors/:id -> get Author detais { name: 'Mark Twain' books: [34, 57, 69, 15] }
 ​
      GET api/bestsellers/similar/:id
      -> get mutiple book names
 ​
     'The Prince and the Pauper',
     'Golden Age',
     'The Adventures of Huckleberry Finn',
     'Old Times on the Mississippi'
 ​
 ​
 */

/*
 ​
 HTML
 ​
 <div>
      <div id="book">

      </div>
 ​
      <div id="author">
 ​
      </div>
 ​
      <div id="similar">
 ​
      </div>
  </div>
 ​
 */

function getBookById(id) {
    document.getElementById('book').textContent = 'Please wait. Book is loading';

    fetch('api/books/' + id, 'GET')
        .then(function(response) {
            document.getElementById('book').textContent = response.name;
        })
        .catch(function() {
            document.getElementById('book').textContent = 'Error. Please refresh your browser';
        })
}

function loadPage(bookId) {

    document.getElementById('book').textContent = 'Please wait. Book is loading';
    document.getElementById('author').textContent = 'Please wait. Author details are loading';
    document.getElementById('similar').textContent = 'Please wait. Similar books are loading';

    fetch('api/books/' + bookId, 'get')
        .then(function(book){
            document.getElementById('book').textContent = book.name;
            return fetch('api/autors' + book.authorId, 'GET');
        })
        .then(function(author) {
            document.getElementById('author').textContent = author.name;
            return Promise.all(author.books.map(function(book) {
                return fetch('api/bestsellers/similar/' + book.id, 'GET');
            }))
        })
         .then(function(simBooks) {
            var similarBooksLoaded = 0;
            var similarBooksAmount = simBooks.length;
            simBooks.forEach(function(similar){
                var sim = document.getElementById('similar');
                var p = document.createElement('p');
                sim.appendChild(p).textContent = similar;
                similarBooksLoaded += 1;
            });
            return similarBooksLoaded === similarBooksAmount;
         })
        .then(function(){
            alert('Horray everything loaded');
        })
        .catch(function () {
            document.getElementById('book').textContent = 'Error. Please refresh your browser';
         })
};
