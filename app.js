/* app.js - Infriendly's functionality. */

function updateVersionString() {
    const version = "0.1.0";
    let versionElement = document.getElementById("version-string");
    versionElement.innerText = version;
}

function loadFromFile(fileName, callback) {
    var reader = new FileReader();

    reader.onload = (e) => {
        const fileContents = e.target.result;
        callback(fileContents);
    }

    reader.readAsText(fileName, "UTF-8");
}

function setTextAreaContent(content) {
    const textArea = document.querySelector("main");
    
    const formattedContent = content.replace(/\n/g, '<br>');
    
    textArea.innerHTML = formattedContent;
}

function loadStartupFile(fileName) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const fileContents = xhr.responseText;
            setTextAreaContent(fileContents);
        }
    };

    xhr.open("GET", fileName, true);
    xhr.send();
}

function focusTextArea() {
    document.querySelector("main").focus();
}

window.addEventListener("load", () => {
    updateVersionString();
    loadStartupFile("STARTUP.txt");
    focusTextArea();
});

function openFileWithDialog() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const fileContents = e.target.result;
                setTextAreaContent(fileContents);
            }

            reader.readAsText(file);
        }
    })

    fileInput.click();
}

function saveFile(content, fileName) {
    const blob = new Blob([content], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

function handleSaveShortcut(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        let randomHexString = Math.random().toString(16).slice(2);
        let fileName = `infriendly-download-${randomHexString}.txt`;
        saveFile(document.querySelector("main").innerText, fileName);
    }
}

function handleOpenShortcut(event) {
    if (event.ctrlKey && event.key === 'o') {
        event.preventDefault();
        openFileWithDialog();
    }
}

// Attach event listeners to the document
document.addEventListener('keypress', handleSaveShortcut);
document.addEventListener('keypress', handleOpenShortcut);
