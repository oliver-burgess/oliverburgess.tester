document.querySelector('h1, li').onclick = function() {
    alert('Ouch! Dickhead!!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cave-cat.jpg') {
        myImage.setAttribute ('src', 'images/cow-cat.jpg');
    } else {
        myImage.setAttribute ('src', 'images/cave-cat.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("please enter name.");
    localStorage.setItem('name', myName);
    myHeading.textContent = "CaveCat FTW, " + myName;
}
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "CaveCatFTWWWWW, " + storedName;
}
myButton.onclick = function() {
    setUserName();
}

