let controller = new UserControler

function mudaData(){
    let data = new Date()
    let dia = data.getDate()
    let ano = data.getFullYear()
    let mes = data.getMonth()
    
    return `${ano}-${mes+ 1}-${dia}` 
    
}

//ao iniciar a pagina
controller.PaginaInicial(mudaData())

//quando o botao for clicado
document.querySelector('#submit').addEventListener('click',()=>{
    console.log('botao funciona')
    let data = document.querySelector('#data')
    let dataString = data.value
    console.log(data.value)
    controller.SelecionaDia(dataString)
})

