const calcular = document.getElementById("calcular");

function calculate() {
	const nome = document.getElementById("nome");
	const altura = document.getElementById("altura");
	const peso = document.getElementById("peso");
	const resultado = document.getElementById("resultado");

	let imc = peso.value / (altura.value * altura.value);
	if ((peso, altura, nome == "")) {
		resultado.innerHTML = "Coloque um valor por favor";
	}

	if (imc <= 18) {
		resultado.innerHTML = "";
		resultado.innerHTML += `Olá ${nome.value}, seu IMC é de ${imc.toFixed(
			2
		)}, abaixo do peso!`;
	} else if (imc <= 24) {
		resultado.innerHTML = "";
		resultado.innerHTML += `Olá ${nome.value}, seu IMC é de ${imc.toFixed(
			2
		)}, peso normal :)`;
	} else if (imc >= 30) {
		resultado.innerHTML = "";
		resultado.innerHTML += `Olá ${nome.value}, seu IMC é de ${imc.toFixed(
			2
		)} IRMÃO TU TA OBESO!`;
	} else {
		resultado.innerHTML = "";
		resultado.innerHTML += "coloque um valor";
	}
}

calcular.addEventListener("click", calculate);
