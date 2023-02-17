window.addEventListener("load",container)


  function container() {
        let so = document.getElementsByClassName("calculo")[0];
         so.addEventListener("click",soma)
     // a primeira e de soma    
         let sub = document.getElementsByClassName("calculo")[1];         
         sub.addEventListener("click",subtrai)

     // a segunda subtrai
         let mult = document.getElementsByClassName("calculo")[2];         
         mult.addEventListener("click",multiplica)
     // a terceira multiplica 
         let divi= document.getElementsByClassName("calculo")[3];         
         divi.addEventListener("click",dividi)     
      // a quarta dividi
   }
 function soma() {
 let valorA = document.getElementById("inputValorA")
 let valorB = document.getElementById("inputValorB")
 let somar = parseFloat(valorA.value) + parseFloat(valorB.value);
 let resultado = document.getElementById("resultado")
                  resultado.innerHTML = somar}

function subtrai() {
   let valorA = document.getElementById("inputValorA")
   let valorB = document.getElementById("inputValorB")
   let subtrair = parseFloat(valorA.value) - parseFloat(valorB.value);
   let resultado = document.getElementById("resultado")
                  resultado.innerHTML = subtrair}  

function multiplica() {
  let valorA = document.getElementById("inputValorA")
  let valorB = document.getElementById("inputValorB")
  let multiplicar = parseFloat(valorA.value) * parseFloat(valorB.value);
  let resultado = document.getElementById("resultado")
                  resultado.innerHTML = multiplicar}
                  
function dividi() {
  let valorA = document.getElementById("inputValorA")
  let valorB = document.getElementById("inputValorB")
  let dividir = parseFloat(valorA.value) / parseFloat(valorB.value);
  let resultado = document.getElementById("resultado")
                  resultado.innerHTML = dividir}               
                             


window.addEventListener("load",container2)

function container2() {
  let so = document.getElementsByClassName("calculo1")[0];
      so.addEventListener("mouseenter",estilo1)
      so.addEventListener("mouseleave",estilo2)
                     
  let sub = document.getElementsByClassName("calculo1")[1];         
      sub.addEventListener("mouseenter",estilo1)
      sub.addEventListener("mouseleave",estilo2)
             
                  
  let mult = document.getElementsByClassName("calculo1")[2];         
      mult.addEventListener("mouseenter",estilo1)
      mult.addEventListener("mouseleave",estilo2)
                   
  let divi= document.getElementsByClassName("calculo1")[3];         
      divi.addEventListener("mouseenter",estilo1)
      divi.addEventListener("mouseleave",estilo2)}

function estilo1() {this.className = "estilo1"}


function estilo2() {
   this.className = "estilo2"}             
             



















