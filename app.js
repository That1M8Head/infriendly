/* app.js - Infriendly's functionality. */

function loadFromFile(fileName, callback) {
    var reader = new FileReader();

    reader.onload = (e) => {
        const fileContents = e.target.result;
        callback(fileContents);
    }

    reader.readAsText(fileName);
}

function setTextAreaContent(content) {
    const textArea = document.querySelector("main");
    
    const formattedContent = content.replace(/\n/g, '<br>');
    
    textArea.innerHTML = formattedContent;
}

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const fileContents = xhr.responseText;
            setTextAreaContent(fileContents);
        }
    };

    xhr.open("GET", "STARTUP.txt", true);
    xhr.send();
});
