/*let nome = "William"
let idade = 22
alert(`Nome: ${nome} Idade: ${idade}`)

document.querySelector("#txtNumero").value = "Valor preenchido no script";*/

function mostraMenor(pNum1, pNum2) {
    let n1 = parseInt(pNum1);
    let n2 = parseInt(pNum2);
    let objDiv = document.querySelector("#resultado");
    let resultado = ""

    if (n1 < n2) {
        resultado = `Número ${n1} é menor que ${n2}!`
    } 
    
    else if (n1 == n2) {
        resultado = `O número ${n1} é igual ao número ${n2}`
    }
    
    else {
        resultado = `Número ${n2} é menor que ${n1}!`
    }
    objDiv.innerHTML = resultado;
}