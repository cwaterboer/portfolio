// script.js
document.addEventListener('DOMContentLoaded', () => {
    const infoBubble = document.getElementById('info-bubble');
    
    document.querySelectorAll('.project, .skill').forEach(element => {
        element.addEventListener('mouseenter', () => {
            const info = element.getAttribute('data-info');
            infoBubble.textContent = info;
            infoBubble.style.display = 'block';
            const rect = element.getBoundingClientRect();
            infoBubble.style.top = `${rect.top - 40}px`;
            infoBubble.style.left = `${rect.left}px`;
        });
        
        element.addEventListener('mouseleave', () => {
            infoBubble.style.display = 'none';
        });
    });
});
