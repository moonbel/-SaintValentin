
let global = "Eu sou uma variável global"
function funcao1(){
let local = "Eu sou uma variável local"
console.log(local)
console.log(global)
}
function funcao2(){
console.log(global)
// console.log(local)
}   

const starsContainer = document.getElementById("estrelas")

for(let i = 0; i < 250; i++){

    const estrela = document.createElement("div");
    estrela.classList.add("estrela");

    estrela.style.left = Math.random() * 100 + "vw";

    estrela.style.top = Math.random() * 100 + "vh";

    estrela.style.animationDelay = Math.random() * 5 + "s";

    starsContainer.appendChild(estrela);
}

function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "Só conheci a felicidade quando conheci você. Obrigado por tudo meu amor";
}
    
const light = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});

const luhiza = document.querySelectorAll("section")

function inicio(){ 
    luhiza.forEach(function(etapa){
        etapa.classList.remove("ativa")
    })

}
document.getElementById("telainicial").classList.add("ativa")


function trocarTela2(){

    luhiza.forEach(function(etapa){
        etapa.classList.remove("ativa")

    })

    document.getElementById("segundaTela").classList.add("ativa")

}

function trocarTela3(){

    luhiza.forEach(function(etapa){
        etapa.classList.remove("ativa")

    })

    document.getElementById("terceiraTela").classList.add("ativa")

}

function trocarTela4(){

    luhiza.forEach(function(etapa){
        etapa.classList.remove("ativa")
    })
}
document.getElementById("quartaTela").classList.add("ativa")
