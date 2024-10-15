function  criarCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'




    cartao.innerHTML = 
    `
    
    <div class="cartao__conteudo">
        <h3 class="programacao">Programação</h3>
        <div class="cartao__conteudo__pergunta">
           <p> Em que ano o Brasil foi descoberto?</p>
        </div>
        <div class="cartao__conteudo__resposta">
           <p> Em 22 de abril de 1500.</p>
        </div>
    </div>
    
    `
    container.appendChild(cartao)
}