
var produtos=[]
var soma = 0
var soma_final=0
var main = document.querySelector('main')
var total = document.getElementById('total')


document.querySelector('input[type="submit"]')
.addEventListener("click", () => {
  var nome_produto = document.querySelector('input[name="nome"]');
  var preco_produto = document.querySelector('input[name="preco"]');

  produtos.push({
    nome: nome_produto,
    valor: preco_produto
  })


if(nome_produto.value!=""&&preco_produto.value!=""){
 
 
  soma+=parseFloat(preco_produto.value)
 
  main.innerHTML+=`
  <div class="produtos">
  <h2 class="nome_produto">`+nome_produto.value+`</h2>
  <h3 class="preco_produto">R$`+preco_produto.value+`</h3>
  </div>`;

  nome_produto.value=""
  preco_produto.value=""}
  
  soma_final=soma.toFixed(2)
  if (soma_final>0) {
    total.style.color="green"
  }else if(soma_final<0){
    total.style.color="red"
  }else{
    total.style.color="black"
  }
  total.innerHTML='R$'+soma_final
  
});

document.querySelector('input[type="button"]')
.addEventListener('click',()=>{
  main.innerHTML=""
  soma=0
  soma_final=0
  total.innerHTML="R$0.00"
  total.style.color="black"

})
