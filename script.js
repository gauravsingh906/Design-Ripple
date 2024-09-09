const moveButton = document.getElementById('moveButton');
let moveDirection = 'right';

moveButton.addEventListener('click', () => {
    const containerWidth = moveButton.parentElement.offsetWidth;
    const buttonWidth = moveButton.offsetWidth;

    if (moveDirection === 'right') {

        moveButton.style.transform = `translateX(${containerWidth - buttonWidth}px)`;
        moveDirection = 'left';
    } else {

        moveButton.style.transform = 'translateX(0)';
        moveDirection = 'right';
    }
});
