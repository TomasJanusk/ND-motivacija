const url = document.querySelector('#urlinput');
const textArea = document.querySelector("#textarea");
const button = document.querySelector("#issaugoti");
button.addEventListener('click', saveMotivation);
const dot = document.querySelector('#vau');

function saveMotivation(){
    const photoURL = url.value;
    const textContent = textArea.value;

    const box = document.createElement('div');
    const photo = document.createElement('img');
    photo.src = photoURL;
   
    const text = document.createElement('h3');
    text.textContent = textContent;
    box.appendChild(photo);
    box.appendChild(text);
    dot.appendChild(box);

    const savedData = {
        photoURL: photoURL,
        textContent: textContent
    };
    localStorage.setItem('motivationData', JSON.stringify(savedData));

    url.value = '';
    textArea.value = '';

}

document.addEventListener('DOMContentLoaded', function(){ 
    const savedDataJSON = localStorage.getItem('motivationData');
    if (savedDataJSON) {
        const savedData = JSON.parse(savedDataJSON);
        url.value = savedData.photoURL;
        textArea.value = savedData.textContent;
    }
});
export default saveMotivation