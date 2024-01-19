/* app.js - The main JavaScript file for Infriendly. */

let textArea = document.querySelector("main");
let titleBar = document.querySelector("header");
let commandBar = document.querySelector("footer");

const appVersion = "0.2";

const defaultCommandBar = 'Commands - <a href="#" onclick="openFileWithDialog()">[Control+O] Open</a> <a href="#" onclick="saveFile()">[Control+S] Download</a>';

function updateVersionString() {
    let versionElement = document.getElementById("version-string");
    versionElement.innerText = appVersion;
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
    textArea.focus();
}

window.addEventListener("load", () => {
    updateVersionString();
    checkUserActivation();
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

    checkUserActivation();
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

/* This is required for Firefox, since it doesn't support opening dialogues unless user activation is active.
 * Chrome doesn't need it, but since Infriendly is cross-platform, we *do* need it.
 * https://developer.mozilla.org/en-US/docs/Web/API/UserActivation */
function checkUserActivation() {
    if (navigator.userActivation.isActive) {
        updateCommandBar(defaultCommandBar);
    }
    else {
        updateCommandBar('Focus Lost - Please click the browser window to use keyboard shortcuts.');
    }
}

function updateCommandBar(message) {
    commandBar.innerHTML = message;
}

document.querySelector("body").addEventListener("mousedown", checkUserActivation)

document.addEventListener('keydown', handleSaveShortcut);
document.addEventListener('keydown', handleOpenShortcut);
