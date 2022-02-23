

// Animation for Even number projects


let slideLeft = {
    distance: '200px',
    origin: 'bottom',
    delay: 600,
    duration: 3000,
    opacity: 0
};

ScrollReveal().reveal('.projectEven', slideLeft);

// Animation for Odd number projects

let slideRight = {
    distance: '200px',
    origin: 'bottom',
    delay: 200,
    duration: 3000,
    opacity: 0
};

ScrollReveal().reveal('.projectOdd', slideRight);


