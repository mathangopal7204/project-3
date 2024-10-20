let pacArray = []; // Array to hold all pacman objects
const pacImages = ['PacMan1.png']; // Array of Pacman images

function makePac() {
    // Generate a random position within the window
    let position = {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight)
    };

    // Create a new image element for the Pacman
    let newPac = document.createElement('img');
    newPac.style.position = 'absolute';
    newPac.src = pacImages[Math.floor(Math.random() * pacImages.length)];
    newPac.width = 100;

    // Set initial position
    newPac.style.left = position.x + 'px';
    newPac.style.top = position.y + 'px';

    // Add the Pacman to the document
    document.body.appendChild(newPac);

    // Store Pacman's position and velocity
    let velocity = {
        x: Math.random() * 10,
        y: Math.random() * 10
    };

    // Add the new Pacman to the array
    pacArray.push({position, velocity, newPac});
}

function checkCollisions(pacMan) {
    // Check for collision with the right or left side of the screen
    if (pacMan.position.x + pacMan.newPac.width >= window.innerWidth || pacMan.position.x <= 0) {
        pacMan.velocity.x = -pacMan.velocity.x; // Reverse X velocity
    }

    // Check for collision with the top or bottom of the screen
    if (pacMan.position.y + pacMan.newPac.height >= window.innerHeight || pacMan.position.y <= 0) {
        pacMan.velocity.y = -pacMan.velocity.y; // Reverse Y velocity
    }
}

function update() {
    pacArray.forEach(pacMan => {
        // Move Pacman based on velocity
        pacMan.position.x += pacMan.velocity.x;
        pacMan.position.y += pacMan.velocity.y;

        // Update the Pacman's position in the DOM
        pacMan.newPac.style.left = pacMan.position.x + 'px';
        pacMan.newPac.style.top = pacMan.position.y + 'px';

        // Check for collisions
        checkCollisions(pacMan);
    });

    // Call the update function again after a short delay
    setTimeout(update, 20);
}
