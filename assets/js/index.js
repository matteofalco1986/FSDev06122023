// Creare un elemento div class col-3 in cui iniettare il innerHTML DONE
// Rendere il film selezionato al clic del bottone
// Aggiungerlo al carrello
// Rendere deselezionare il film al clic del bottone
// Eliminarlo dal carrello
// Recuperare i dati dal server api
// Riempire i vari campi della card con i dati del server api
// Formattare i campi in css

let cart = [];
let address = 'https://striveschool-api.herokuapp.com/books'
let promise = fetch(address)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(err);
        }
    })
    .then((data) => data.forEach(book => {
        populateHTML(book)
    }))
    .catch((err) => console.log('errore'));


// Rendere SVG cliccabile
// Fare comparire il carrello
// Popolare il carrello



console.log(localStorage.getItem('cart'))







// Populates the HTML with api material

function populateHTML(singleBook) {
    let col = document.createElement('div');
    col.classList.add('col-3')
    document.querySelector(".row").appendChild(col);
    col.innerHTML = `<div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="" class="card-img-top" alt="locandina film">
                            <div class="card-body">
                                <h5 class="card-title">TITOLO</h5>
                                <p class="genre card-text">Genre
                                </p>
                                <p class="price card-text">Price</p>
                                <a href="#" class="add btn btn-danger text-white">Compra ora</a>
                                <a href="#" class="discard btn btn-white text-danger border border-1 border-danger">Scarta</a>
                            </div>
                        </div>
                    </div>`

    // Selects object and makes border red
    col
        .querySelectorAll('a')
    [0].addEventListener('click', function () {
        this.closest('.card').classList.add('selected');
        cart.push(singleBook);
        localStorage.clear();
        localStorage.setItem('cart', cart);
    })

    // Deselects object and clears border
    col
        .querySelectorAll('a')
    [1].addEventListener('click', function () {
        this.closest('.card').classList.remove('selected');
        this.closest('.col-3').classList.add('removed');
    })

    // Book image
    col.querySelector("img").src = singleBook.img;
    col.querySelector("img").alt = singleBook.title;
    // Book title
    col.querySelector('.card-title').innerHTML = singleBook.title;
    // Book genre
    col.querySelector('.genre').innerHTML = singleBook.category;
    // Book price
    col.querySelector('.price').innerHTML = singleBook.price + '€';
}

