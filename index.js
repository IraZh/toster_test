const targetDate = new Date('2023-09-25T14:51:16').getTime();

function updateTimer() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '00:00:00';
    } else {
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();


const thumbnails = document.querySelectorAll('.image');
const selectedImage = document.querySelector('.selected-image');

thumbnails[0].classList.add('selected-thumbnail'); 

function showImage(index) {
    const imagePaths = [
        './assets/images/BIG PHOTOS.png',
        './assets/images/orange.png',
        './assets/images/pink.png',
        './assets/images/yellow.png'
    ];

    selectedImage.innerHTML = ''; 

    const image = document.createElement('img');
    image.src = imagePaths[index - 1];
    image.alt = `Изображение ${index}`;
    
    selectedImage.appendChild(image); 

    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('selected-thumbnail');
    });

    thumbnails[index - 1].classList.add('selected-thumbnail');
}