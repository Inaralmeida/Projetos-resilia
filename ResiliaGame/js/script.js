var energia = 100
var trabalho = 100
var estudos = 100
var dinheiro = 1000
var nome = ' '

function apresentarJogo(){
    var bloco = document.querySelector("#apresentaJogo")
    
    var texto = document.querySelector("#texto").textContent = (' ')
    var titulo = document.querySelector('#titulo').textContent = (" ")
    var remove = document.querySelector('#inicio')
    remove.style = `border: none; background: none` 
    
    
    bloco.innerHTML = `
    <div id="textoApresentacao">
        <h2>Seja bem vindo ao Vida de Pobre</h2>
         <p>Eu sou Resiliana e vou ajudar na sua jornada.<br>Antes de começar me diz, como você gosta de ser chamado(a)</p>
        <div id="input">
            <input type="text" name="nome" id="recebeNome" placeholder="SEU NOME"><br>
        </div>
        <div id="botaoApresent">
            <button id="botaoApresentacao" type="submit"  onclick="apresentacaoPart2()">Continuar</button> 
        </div>
    
    </div>

    <img class="resiliana" src="https://i.pinimg.com/originals/aa/db/a7/aadba7032a2a511bc9818881fc4a8327.png" alt="" ">`
    bloco.style = `background-color: rgba(255, 255, 255, 0.815) ;
    border: 2px solid black;`
    var btn = document.querySelector(".botao")
    btn.parentNode.removeChild(btn)
    
    var perguntaNome = document.querySelector('#recebeNome')
    nome = perguntaNome.value
    console.log(nome)
    
}

function apresentacaoPart2(){
    var perguntaNome = document.querySelector('#recebeNome')
    nome = perguntaNome.value
    console.log(nome)
    
    var titulo = document.querySelector(' #textoApresentacao h2').textContent = (`Olá ${nome}`)
    var texto = document.querySelector('#textoApresentacao p').textContent = (" ")
    var input = document.querySelector("#input")
    input.innerHTML =` O jogo é baseado em hipóteses em que você terá que tomar decisões que tem como consequência o ganho ou a perda de pontos de atributos, que são dinheiro, energia, estudos e trabalho. Ao final de cada fase, você terá uma oportunidade de recuperar os pontos perdidos. Para alcancar a Profissão desejada é bom que todos os atributos estejam altos.`
    var botao = document.querySelector("#botaoApresent").innerHTML = `<button id="botaoApresentacao" type="submit"  onclick="apresentacaoPart3()">Continuar</button> `
}

function apresentacaoPart3(){
    var titulo = document.querySelector(' #textoApresentacao h2').textContent = (`${nome}`)
    var texto = document.querySelector('#textoApresentacao p').textContent = (" ")
    var input = document.querySelector("#input")
    input.innerHTML =` Agora você é um jovem de 18 anos que trabalha em um call center e tem como sonho se tornar um desenvolvedor Full-Stack, e para dar inicio ao sonho você se esforçou e conseguiu uma bolsa para Web Dev na <strong>RESILIA</strong> .`
    var botao = document.querySelector("#botaoApresent").innerHTML = `<button id="botaoApresentacao" type="submit"  onclick="apresentacaoPart4()">Continuar</button> `
}

function apresentacaoPart4(){
    var titulo = document.querySelector(' #textoApresentacao h2').textContent = (`Ultima coisa, prometo`)
    var texto = document.querySelector('#textoApresentacao p').textContent = (" Cuidado com o Demonizoton, nem tudo é o que parece.")
    var input = document.querySelector("#input")
    input.innerHTML =` Agora sim, Que a sorte esteja sempre ao seu favor.`
    var botao = document.querySelector("#botaoApresent").innerHTML = `<button id="botaoApresentacao" type="submit"  onclick="avisoPontuacao()">Continuar</button> `
}

function avisoPontuacao(){
    /* Rmovendo itens */
    var tituloInicio = document.querySelector(' #textoApresentacao h2').textContent = (" ")
    var textoInicio = document.querySelector('#textoApresentacao p').textContent = (" ")
    var input = document.querySelector("#input").textContent = (" ")
    var img = document.querySelector("#apresentaJogo")
    img.parentNode.removeChild(img)

    /* Alterando */
   
    var borda = document.querySelector('#inicio')
    borda.style = `border: 2px solid;  margin: 0 auto; margin-top: 5%;`
    
    /* Adicionando itens */
    var texto = document.querySelector('#texto')
    texto.textContent = (' Para começar você ganhou 100 pontos em todas as categorias e $1000 reais')
    var addEnergia = document.querySelector('#energia').textContent = (energia)
    var addEstudos = document.querySelector('#estudos').textContent = (estudos)
    var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
    var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
    var addNome = document.querySelector('#nomeUser').textContent = (nome)
    var btn = document.querySelector("#bota")
    btn.innerHTML = `<button id="botaoInicio"  onclick="acordar()">Proximo</button>`
    btn.style = `position: absolute;
    right: 690px;
    width: 150px;
    height: 40px;
    margin-top: 20px;`

}

function acordar(){
    
    var titulo = document.querySelector('#titulo')
    titulo.innerHTML = `<img width="150px" src="https://image.flaticon.com/icons/png/512/1584/1584834.png" > `
    var texto = document.querySelector('#texto').textContent = ('São 7h, ta na hora de acordar o que você deseja fazer? ')
    var escolherOpcao = document.querySelector('#esco')
    escolherOpcao.innerHTML = `<div class="radios" id="verde">
    <input type="radio" name="escolha" id="radio"  style="margin: 10px 5px">LEVANTAR
    </div>
    <div class="radios" id="vermelho">
    <input type="radio" name="escolha" id="radio" style="margin: 10px 5px">+ 5 MINUTOS 
    </div>
    <div class="radios" id="amarelo">
    <input type="radio" name="escolha" id="radio" style="margin: 10px 5px">DESLIGAR DESPERTADOR
    </div>`
    var btn = document.querySelector("#bota")
    btn.innerHTML = `<button id="botaoInicio"  onclick="mostraPonto1()">Essa é a minha escolha</button>`
    btn.style = `position: absolute;
    right: 690px;
    width: 150px;
    height: 40px;
    margin-top: 20px;`
    
} 

function mostraPonto1(){
    var escolha = document.getElementsByName('escolha')
    var titulo = document.querySelector('#titulo')
    var texto = document.querySelector('#texto')
    var resposta = document.querySelector('#esco')
    var btn = document.querySelector("#bota")
        btn.style = `position: absolute;
        right: 690px;
        width: 150px;
        height: 40px;
        margin-top: 20px;`
    
    if(escolha[0].checked){ /* opção 1 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia -= energiaAdd 
        /* estudos += estudosAdd */
        trabalho += trabalhoAdd 
        dinheiro += dinheiroAdd
        titulo.textContent = ('Você escolheu levantar ')
        texto.textContent = ('Você conseguiu chegar no trabalho 30 minutos antes do seu horario, recebeu um bonus salarial')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: - ${energiaAdd}</li>
        <li>Estudos: =  ${estudos}</li>
        <li>Trabalho: + ${trabalhoAdd}</li>
        <li>Dinheiro: + R$ ${dinheiroAdd}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
        
        
        if(energia <= 0 || estudos <= 0 || trabalho <= 0){
             btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
        
        
    }
    else if(escolha[1].checked){ /* Opção 2 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia += energiaAdd 
        /* estudos += estudosAdd */
        trabalho -= trabalhoAdd 
        dinheiro -= dinheiroAdd
        titulo.textContent = ('Você escolheu + 5 minutos ')
        texto.textContent = ('Você perdeu a hora e chegou 30 minutos atrasado, recebeu um desconto no salario')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: + ${energiaAdd}</li>
        <li>Estudos: =  ${estudos}</li>
        <li>Trabalho: - ${trabalhoAdd}</li>
        <li>Dinheiro: - R$ ${dinheiroAdd}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
        
     
        if(energia <= 0 || estudos < 0 || trabalho <0){
            btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button></button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
    }
    else{ /* Opção 3 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia += energiaAdd 
        /* estudos += estudosAdd */
        trabalho -= trabalhoAdd 
        dinheiro -= dinheiroAdd
        titulo.textContent = ('Você escolheu desligar o despertador ')
        texto.textContent = ('Você não conseguiu acordar e faltou foi descontado o seu dia de trabalho')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: + ${energiaAdd}</li>
        <li>Estudos: =  ${estudos}</li>
        <li>Trabalho: - ${trabalhoAdd}</li>
        <li>Dinheiro: - R$ ${dinheiroAdd}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
        

        if(energia <= 0 || estudos < 0 || trabalho <0){
            btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button></button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
    }
}

function apresentaIzoton(){
    var bloco = document.querySelector("#inicio")
    bloco.style = `
    width: 650px;
    height: 450px;
    padding: 25px;  `
  
    bloco.innerHTML = `
    <div id="textoIzoton">
        <div id="subTextoIzoton">
            <h2>Hellow People</h2>
            <p> 
                Eu sou o <span>DEMONIZOTON</span>, vou te ajudar em sua jornada. eu sempre aparecerei nas melhores horas com propostas irrecusaveis, pensando sembre no seu bem estar. Até logo pequeno gafanhoto, nos vemos em breve. HAHAHA
            </p>
        </div>
        <img class="izoton" src="img/azazel.png" alt="" style="margin-right: "-450px">
        
    </div>
    
    <button id="botaoInicio"  onclick="fazRelatorio()">Continuar</button>`

    
}

function fazRelatorio(){
    var bloco = document.querySelector("#inicio")
    bloco.style = `
    width: 650;
    height: auto;
    padding: 5px;  `

   
  
    bloco.innerHTML= (`
        <h2 id="titulo">
            <img class="imagem" width="70%" src="img/codar.png" >  
        </h2> <!-- --> 
        <p id="texto">Seu chefe mandou um e-mail pedindo que fizesse um relatório para entregar para ele até as 20h, mas voccê aintem o seu Resilia Game para terminar e a aula começa as 19h, o que fazer?</p> <!-- --> <div id="esco">  <!-- --> 
        <div class="radios" id="verde">
            <input type="radio" name="escolha" id="radio"  style="margin: 10px 5px">FAZER RELATORIO
        </div> <!-- --> 
        <div class="radios" id="vermelho">
            <input type="radio" name="escolha" id="radio" style="margin: 10px 5px">TERMINAR O JOGO
        </div> <!-- --> 
        <div class="radios" id="amarelo">
            <input type="radio" name="escolha" id="radio" style="margin: 10px 5px">TENTAR FAZEROS DOIS</div> <!-- --> 
        </div><!-- --> 
        <div id="bota"> 
            <button id="botaoInicio"  onclick="mostraPonto2()">Essa é a minha escolha</button> 
        </div>`)
        var btn = document.querySelector("#bota")
        btn.style = `position: absolute;
        right: 690px;
        width: 150px;
        height: 40px;
        margin-top: 20px;`
   
   
}

function mostraPonto2(){
    var escolha = document.getElementsByName('escolha')
    var titulo = document.querySelector('#titulo')
    var texto = document.querySelector('#texto')
    var resposta = document.querySelector('#esco')
    var btn = document.querySelector("#bota")
    btn.innerHTML = `<button id="botaoInicio"  onclick="mostraPonto1()">Essa é a minha escolha</button>`
    btn.style = `position: absolute;
    right: 690px;
    width: 150px;
    height: 40px;
    margin-top: 20px;`
    
    if(escolha[0].checked){ /* opção 1 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia -= energiaAdd 
        estudos -= estudosAdd 
        trabalho -= trabalhoAdd 
        /* dinheiro += dinheiroAdd */
        titulo.textContent = ('Você escolheu fazer o relatório')
        texto.textContent = ('Você entregou o relario mas não foi o que o seu chefe pediu e não entregou o jogo')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: - ${energiaAdd}</li>
        <li>Estudos: -  ${estudosAdd}</li>
        <li>Trabalho: - ${trabalhoAdd}</li>
        <li>Dinheiro:  R$ ${dinheiro}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
      
        if(energia < 0 || estudos < 0 || trabalho <0){
            btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button></button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
    }
    else if(escolha[1].checked){ /* Opção 2 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia -= energiaAdd 
        estudos += estudosAdd
        trabalho += trabalhoAdd 
        dinheiro += dinheiroAdd
        titulo.textContent = ('Você escolheu terminar o jogo')
        texto.textContent = ('Você conseguiu terminar o jogo e ainda sobrou um tempinho e você terminou o relatorio')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: - ${energiaAdd}</li>
        <li>Estudos: +  ${estudos}</li>
        <li>Trabalho: + ${trabalhoAdd}</li>
        <li>Dinheiro: + R$ ${dinheiroAdd}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)
    
        if(energia <= 0 || estudos < 0 || trabalho <0){
            btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button></button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
    }
    else{ /* Opção 3 */
        var energiaAdd = Math.trunc( Math.random()*100);
        var estudosAdd = Math.trunc( Math.random()*100);
        var trabalhoAdd =  Math.trunc( Math.random()*100);
        var dinheiroAdd = Math.trunc( Math.random()*200);
        energia -= energiaAdd 
        estudos -= estudosAdd 
        trabalho -= trabalhoAdd 
        dinheiro -= dinheiroAdd
        titulo.textContent = ('Você escolheu tentar fazer os dois ')
        texto.textContent = ('Você se desesperou e tentou fazer os dois ao mesmo tempo e não conseguiu terminar nenhum')
        resposta.innerHTML = `<ul class="respostaEscolha">
        <li>Energia: - ${energiaAdd}</li>
        <li>Estudos: -  ${estudos}</li>
        <li>Trabalho: - ${trabalhoAdd}</li>
        <li>Dinheiro: - R$ ${dinheiroAdd}</li>
        </ul>`
        
        var addEnergia = document.querySelector('#energia').textContent = (energia)
        var addEstudos = document.querySelector('#estudos').textContent = (estudos)
        var addTrabalho = document.querySelector('#trabalho').textContent = (trabalho)
        var addDinheiro = document.querySelector('#dinheiro').textContent = (dinheiro)

        if(energia <= 0 || estudos < 0 || trabalho <0){
            btn.innerHTML = `<button id="botaoInicio"  onclick="recuperaPontos()">CONTINUAR</button></button>`
        }else{
            btn.innerHTML = `<button id="botaoInicio"  onclick="apresentaIzoton()">CONTINUAR</button></button>`
        }
    }
}