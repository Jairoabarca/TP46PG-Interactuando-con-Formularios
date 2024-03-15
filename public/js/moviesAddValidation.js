const $ = (id) => document.getElementById(id);



window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    console.log('moviesAddValidation success!!!');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

const form = document.querySelector('form')

const inputTitle = form.elements[0];
const inputRating = form.elements[1];
const inputAwards = form.elements[2];
const inputReleaseDate = form.elements[3];
const inputLength = form.elements[4];
const selectGenre = form.elements[5];

const inputTitleID = document.getElementById('title');
const inputRatingID = document.getElementById('rating');
const inputAwardsID = document.getElementById('awards');
const inputReleaseDateID = document.getElementById('release_date');
const inputLengthID = document.getElementById('length');
const selectGenreID = document.getElementById('genre_id');

//$('title').focus() Se posiciona el cursor en title

$('title').addEventListener('focus', ()=>{
    $('info-title').innerHTML = "Debes dar el nombre original de la pelicula"
    
    setTimeout(()=>{
        $('info-title').innerHTML = "";
    },2000)
    $('error-title').innerHTML = ""
})

$('title').addEventListener('blur', (e)=>{
    $('info-title').innerHTML = "";
    if (e.target.value.length < 2) $('error-title').innerHTML = "Tan corto es el titulo de la peliiicula?:( $&*[#¡?"
    if (!e.target.value) $('error-title').innerHTML = "Te dije que pongas el nombre de la pelii!!!:("

})

$('rating').addEventListener('focus', ()=>{
    $('info-rating').innerHTML = "Decime cual ,cual es el rating???"
    setTimeout(()=>{
        $('info-rating').innerHTML = "";
    },2000)
    $('error-rating').innerHTML = ""
})

$('rating').addEventListener('blur', (e)=>{
    $('info-rating').innerHTML = "";

    if (e.target.value < 0) $('error-rating').innerHTML = "Tan mal le fue? :( "
    if (e.target.value > 10) $('error-rating').innerHTML = "Aguantaa! (°o°)"

    if (!e.target.value) $('error-rating').innerHTML = "No averiguaste el rating?!!!:("
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let error = false;

    for (let i = 0; i < form.elements.length -1; i++) {
        if (!form.elements[i].value) {
            error = true
        }
    }
    if(!error) {
        form.submit()
    }else{
        alert('upss, hay campos vacios...¬_¬')
    }
})


}