// obtion 2. add onclick function
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}
// obtion 3. add onclick function

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// obtion 3 . another

const purpleButton = document.getElementById('purple')
purpleButton.onclick = function purple() {
    document.body.style.backgroundColor = 'purple'
};

// obtion 4 .
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// obtion 4 . another
const redButton = document.getElementById('make-red')
redButton.addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = 'red'
});

// obtion 4. final
document.getElementById('goldenrod',).addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})