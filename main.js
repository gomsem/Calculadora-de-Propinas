function calcular(){
    
    var valorNumero1 = document.getElementById("numero1").value;
	var valorNumero2 = document.getElementById("numero2").value;
    var valorNumero3 = document.getElementById("numero3").value;
    
    var resultado1 = valorNumero1 * valorNumero2;
    var resultado2 = resultado1 / valorNumero3;
    
    document.getElementById("resultado1").innerHTML = "La propina total es: $" + resultado1; 
    document.getElementById("resultado2").innerHTML = "La propina individual es: $" + resultado2.toFixed(2);   
}

