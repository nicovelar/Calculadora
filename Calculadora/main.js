const div = document.getElementById("calculadora")

div.innerHTML = "<h1>Calculadora</h1>"
div.innerHTML += "<input type='button' id='sumar' onclick='sumar()' value='+'></input>"
div.innerHTML += "<input type='button' id='dividir' onclick='dividir()' value='/'></input>"
div.innerHTML += "<input type='button' id='multiplicar' onclick='multiplicar()' value='*'></input>"
div.innerHTML += "<input type='button' id='restar' onclick='restar()' value='-'</input> <br> <br>"
div.innerHTML += "<input type='number' id='numero1' onkeyup='capturar()'></input> <br>"
div.innerHTML += "<h2 id ='resultado'>Resultado</h2>"


let res = document.getElementById("resultado")

numerocap = 0
resultado = 0

const capturar = () => {
    numerocap = parseInt(document.getElementById("numero1").value)
    if (resultado == NaN) {
        resultado = 0
    }
}

const sumar = () => {
        capturar()
        resultado = resultado + numerocap 
        igual()
}

const restar = () => {
    capturar()
    resultado = resultado - numerocap 
    igual()
}

const dividir = () => {
    capturar()
    resultado = resultado / numerocap 
    igual()
}

const multiplicar = () => {
    capturar()
    resultado = resultado * numerocap 
    igual()
}

const igual = () => {
    res.innerHTML = "<h3 id ='resultado'>Resultado = " + resultado + "</h3>" 
}

