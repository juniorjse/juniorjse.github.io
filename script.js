var messageArray = ['Web, mobile, and full-stack development.'];
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

// Auto-scrolling projects
document.addEventListener('DOMContentLoaded', function() {
  const projectsContainer = document.querySelector('main.cards');
  
  if (!projectsContainer) {
    console.warn('Project container not found');
    return;
  }
  
  let isHovered = false;
  let isTouched = false;
  
  // Function to start automatic scrolling
  function startAutoScroll() {
    let lastTimestamp = 0;
    const pixelsPerSecond = 50; // Ajuste esta velocidade conforme necessário
    
    function step(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (!isHovered && !isTouched) {
        // Calcular quantos pixels mover baseado no tempo decorrido
        const pixelsToMove = (pixelsPerSecond * elapsed) / 1000;
        
        // Incrementar o scroll
        projectsContainer.scrollLeft += pixelsToMove;
        
        // Se chegou ao final, voltar instantaneamente ao início
        if (projectsContainer.scrollLeft >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
          // Reiniciar do começo
          projectsContainer.scrollLeft = 0;
        }
      }
      
      lastTimestamp = timestamp;
      requestAnimationFrame(step);
    }
    
    // Iniciar a animação usando requestAnimationFrame para maior fluidez
    requestAnimationFrame(step);
  }
  
  // Duplicar os cards para criar um efeito de loop infinito
  function setupInfiniteLoop() {
    // Obter todos os cards originais
    const cards = Array.from(projectsContainer.querySelectorAll('.card'));
    
    // Clone cada card e adicione-o no final
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      projectsContainer.appendChild(clone);
    });
  }
  
  // Configurar o efeito de loop infinito
  setupInfiniteLoop();
  
  // Add event listeners for mouse hover
  projectsContainer.addEventListener('mouseenter', () => {
    isHovered = true;
  });
  
  projectsContainer.addEventListener('mouseleave', () => {
    isHovered = false;
  });
  
  // Add touch events for mobile
  projectsContainer.addEventListener('touchstart', () => {
    isTouched = true;
  });
  
  projectsContainer.addEventListener('touchend', () => {
    // Delay setting isTouched to false to allow for browsing
    setTimeout(() => {
      isTouched = false;
    }, 5000);
  });
  
  // Start the automatic scrolling
  startAutoScroll();
});
