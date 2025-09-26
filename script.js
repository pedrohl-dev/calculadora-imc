function gerarImc(){
    var peso = parseInt(document.getElementById('peso').value);
    var alturaCm = parseInt(document.getElementById('altura').value);
    var alturaM = alturaCm / 100;

    if (isNaN(peso) || isNaN(alturaCm)) {
        alert('Insira apenas números!');
    }

    var altura = alturaM * alturaM

    const imc = (peso / altura);
    const imcArredondado = imc.toFixed(2);
    console.log("Peso = ", peso)
    console.log("Altura = ", alturaCm)
    console.log("IMC é = ", imcArredondado)

    if ((peso==="") || (alturaCm==="")) {
        resultado.textContent = "Insina os valores!"
    } else {
        let imcResultado = document.getElementById('imc');
        imcResultado.innerText = 'Seu IMC é: ' + imcArredondado;
    }

    input.addEventListener('input', () => {
    input.value = input.value.replace(/[.,]/g, '');
    });

    const status = document.getElementById('result')

    if (imc<18.5) {
        status.innerText = 'Você está abaixo do peso.';
    } else if (imc>=18.5 && imc <=24.9) {
        status.innerText = ('Você está no peso ideal.');
    } else if (imc>=25.0 && imc<=29.9) {
        status.innerText = ('Você está com Obesidade.');
    } else if (imc>=40.0) {
        status.innerText = ('Você está com Obesidade Grave.')
    }
}