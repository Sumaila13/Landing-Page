document.getElementById('menu-close').addEventListener('click', function(){
    document.querySelector('#navigator .nav').classList.remove('active')
});
document.getElementById('menu-btn').addEventListener('click', function(){
    document.querySelector('#navigator .nav').classList.add('active')
});

// document.getElementById('menu-btn').addEventListener('click', function() {
//     document.querySelector('nav .navigation ul').classList.toggle('active');
// });