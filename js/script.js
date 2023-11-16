// addeventlistener = adicionar um ouvidor de eventos
const botao = document.querySelector("#botaoTema")
botao.addEventListener('click',modo)

function modo(){
    // document é o HTML
    let body = document.querySelector("body")
    let temaAtualClaro = document.querySelector("#temaAtualClaro")
    let temaAtualEscuro = document.querySelector("#temaAtualEscuro")
    


if(botao.checked){
    // setAttribute(atributo,valor)
body.setAttribute("data-bs-theme","dark")
temaAtualClaro.style.display = "none"
temaAtualEscuro.style.display = "block"

}else{
body.setAttribute("data-bs-theme","light")
temaAtualEscuro.style.display = "none"
temaAtualClaro.style.display = "block"
}
}