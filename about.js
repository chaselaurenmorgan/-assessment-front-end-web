console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function compliment(){
	alert('You are amazing!')
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')
image.addEventListener('mouseover',compliment)