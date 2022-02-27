var messageArray = ['Desenvolvedor junior.'];
var textPosition = 0;
var speed = 70;

typewriter = () => {
    document.querySelector('#message').innerHTML = 
    messageArray[0].substring(0, textPosition) + "<p>|</p>";

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);

const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}
