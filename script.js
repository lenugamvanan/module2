document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        switchPage('.page-1', '.page-2');
        displayInfo('info-1');
    });

    document.querySelector('.page-2 .next-button').addEventListener('click', function() {
        switchPage('.page-2', '.page-3');
        displayInfo('info-2');
    });

    document.querySelector('.page-3 .next-button').addEventListener('click', function() {
        switchPage('.page-3', '.page-4');
        displayInfo('info-3');
    });

    document.querySelector('.page-4 .next-button').addEventListener('click', function() {
        switchPage('.page-4', '.page-5');
        displayInfo('info-4'); // Display last page content
    });
});

function switchPage(hideSelector, showSelector) {
    document.querySelector(hideSelector).style.display = 'none';
    document.querySelector(showSelector).style.display = 'flex';
}

function displayInfo(infoId) {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.style.display = 'none');
    document.getElementById(infoId).style.display = 'block';
}