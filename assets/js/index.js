// Creare un elemento div class col-4 in cui iniettare il innerHTML DONE
// Rendere il film selezionato al clic del bottone
// Aggiungerlo al carrello
// Rendere deselezionare il film al clic del bottone
// Eliminarlo dal carrello
// Recuperare i dati dal server api
// Riempire i vari campi della card con i dati del server api
// Formattare i campi in css

let address = 'https://striveschool-api.herokuapp.com/books'
fetch(address)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return 'error'
        }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('errore'))






let col = document.createElement('div');
document.querySelector(".row").appendChild(col);
col.innerHTML = `<div class="col-4">
<div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="locandina film">
    <div class="card-body">
        <h5 class="card-title">TITOLO</h5>
        <p class="card-text">Genre
        </p>
        <p class="card-text">Price</p>
        <a href="#" class="add btn btn-danger text-white">Aggiungi</a>
        <a href="#" class="discard btn btn-white text-danger border border-1 border-danger">Scarta</a>
    </div>
</div>
</div>`

// Selects object and makes border red
col
    .querySelectorAll('a')
[0].addEventListener('click', function () {
    this.closest('.card').classList.add('selected');
})

// Deselects object and clears border
col
    .querySelectorAll('a')
[1].addEventListener('click', function () {
    this.closest('.card').classList.remove('selected');
})