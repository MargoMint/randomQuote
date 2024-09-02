const button = document.querySelector('.btn');
const image = document.querySelector('.card__img');
const url = "https://random.dog/doggos";

async function fetcHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}
button.addEventListener("click", () => {
    /* let isLoaded = image.complete;
    if (isLoaded) {
        
    } */
    fetcHandler();
});