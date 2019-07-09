//Android VS Apple

//Event Listeners
document.getElementById('androidBtn').addEventListener('click', androidFunction);
document.getElementById ('appleBtn').addEventListener('click', appleFunction);
//Event Functions
function androidFunction() {
    document.getElementById('site-image').src = 'images/Android-Logo.jpg';
    document.getElementById('Link1').innerHTML = 'Android Home';
    document.getElementById('Link1').style.backgroundColor = '#a4c93b';
    document.getElementById('Link1').href = 'https://www.android.com/';
    document.body.style.backgroundColor = '#a4c93b';
}

function appleFunction() {
    document.getElementById('site-image').src = 'images/Apple-Logo.jpg';
    document.getElementById('Link1').innerHTML = 'Apple Home';
    document.getElementById('Link1').style.backgroundColor = '#b6bcca';
    document.getElementById('Link1').href = 'https://www.apple.com/';
    document.body.style.backgroundColor = '#b6bcca';
}