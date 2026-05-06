function valider (){

    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let resultado = document.getElementById("resultado");

    if(divisor<2 || divisor>7 ){
        resultado.textContent= "❌ Erreur : le diviseur doit être entre 2 et 7";
        resultado.className = "mt-4 text-center font-semibold text-red-600";
        return;
    }

    if(dividendo % divisor === 0){
         resultado.textContent = `✅ ${dividendo} es múltiplo de ${divisor}.`;
        resultado.className = "mt-4 text-center font-semibold text-green-600";
    }else {
         resultado.textContent = `❌ ${dividendo} no es múltiplo de ${divisor}.`;
         resultado.className = "mt-4 text-center font-semibold text-red-600";
    }

    
}