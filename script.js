

function add(value){
    document.getElementById('pantalla').value += value
}

function clean(){
    document.getElementById('pantalla').value = ''
}


function calculate(){
    const valueScreen = document.getElementById('pantalla').value
    const result = eval(valueScreen)
    document.getElementById('pantalla').value = result
}


document.getElementById('info').addEventListener('mouseover', function() {
    document.getElementById('hoverMessage').style.display = 'block';
});

document.getElementById('info').addEventListener('mouseout', function() {
    document.getElementById('hoverMessage').style.display = 'none';
});