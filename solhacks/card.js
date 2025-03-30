document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('randomImage');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const durationInput = document.getElementById('duration');
    
    // List of image filenames in your folder
    const imageFiles = [
        'img/bandolon.jpeg',
        'img/camaron.png',
        'img/cascada.jpeg',
        'img/dialecto.png',
        'img/El Barril.jpeg',
        'img/El Borracho.jpeg',
        'img/El chile.jpeg',
        'img/El nopal.jpeg',
        'img/El paraguas.jpeg',
        'img/El Violin.jpeg',
        'img/gallo.jpeg',
        'img/La artesania.jpeg',
        'img/La bandera.jpeg',
        'img/La botella.jpeg',
        'img/la chancla.jpeg',
        'img/la corona.jpeg',
        'img/La escalera.jpeg',
        'img/La garza.jpeg',
        'img/La Rana.jpeg',
        'img/La ropa.jpeg',
        'img/La rosa.jpeg',
        'img/la sandia.jpeg',
        'img/La Sirena.jpeg',
        'img/mango.jpeg',
        'img/mole.jpeg',
        'img/nance.jpeg',
        'img/perico.jpeg',
        'img/playa.jpeg',
        'img/pulsera.jpeg',
        'img/tamal.png',
        'img/tortillera.png',

    

        // Add all your image filenames here
    ];
    
    let intervalId = null;
    let timeoutId = null;
    
    // Function to display a random image
    function displayRandomImage() {
        if (imageFiles.length === 0) {
            console.error('No images available');
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const randomImageFile = imageFiles[randomIndex];
        imageElement.src = randomImageFile;
        imageElement.alt = `Random Image: ${randomImageFile}`;
    }
    
    // Start displaying random images
    startBtn.addEventListener('click', function() {
        const durationSeconds = parseInt(durationInput.value) || 10;
        
        // Clear any existing intervals/timeouts
        if (intervalId) clearInterval(intervalId);
        if (timeoutId) clearTimeout(timeoutId);
        
        // Display first image immediately
        displayRandomImage();
        
        // Change image every second
        intervalId = setInterval(displayRandomImage, 10000);
        
        // Stop after the specified duration
        timeoutId = setTimeout(stopDisplay, durationSeconds * 1000);
        
        // Update button states
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });
    
    // Stop displaying random images
    stopBtn.addEventListener('click', stopDisplay);
    
    function stopDisplay() {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        intervalId = null;
        timeoutId = null;
        
        // Update button states
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
    
    // Initialize button states
    stopBtn.disabled = true;
});

