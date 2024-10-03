const button = document.getElementById('colorButton');
const colors = ['red', 'blue', 'purple']; 
let currentColorIndex = 0; 

button.addEventListener('click', () => {
    button.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
