//  javascript natif -modifier les listes
// const elements = document.querySelectorAll('#javascript-list li');
// elements.forEach(element => {
//     element.textContent = "javascript"
// });


// // jquery
// $("#jquery-list li").text("JQuery");

// javascript natif - ajouter un event sur li n°2
// document.querySelector('#javascript-list li:nth-child(2)')
//     .addEventListener('click', function () {
//         alert('javascript')
//     })

// // jquery

// $('#jquery-list li:nth-child(2)').css("cursor", "pointer")
//     .on('click', function () {
//         alert('jquery')
//     })

// javascript click bouton js et faire apparaitre et disparaitre le carre
let display = true
document.querySelector('#btn-js').addEventListener('click', function () {
    if (display === true) {
        document.querySelector('#carre').style.display = 'none'
    } else {
        document.querySelector('#carre').style.display = 'block'
    }
    display = !display;
})

// jquery 

let opacity = 0;


$('#btn-jquery').on('click', function () {

    // $('#carre').toggle("slow");
    $('#carre').animate({ opacity: opacity }, "slow");
    $('#carre').animate({ opacity: opacity }, "slow");
    opacity = opacity === 1 ? 0 : 1;

    display = !display;
});


