// <!-- option 2 for event handler --> 
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}   

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// option 3: get Element id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3 slight diff. version: get Element id and then set onclick

const btnMakePurple = document.getElementById('btn-make-purple');
        btnMakePurple.onclick = makePurple;
        function makePurple(){
            document.body.style.backgroundColor = 'black'
        }