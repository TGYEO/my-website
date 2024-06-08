document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => {
        alert('Button Clicked!');
    });
    document.body.appendChild(button);
});

