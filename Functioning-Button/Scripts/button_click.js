function openVideo() {
    // Opens a funee video 
    open("https://youtu.be/QkYY3ttZR04");
}

// creates an object of the button
const button = document.getElementById('btn');

// Checks if any button is clicked
button.addEventListener('click', openVideo);
