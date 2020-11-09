let data = document.querySelector('#data')
let botao =document.querySelector('#submit')
let dataEscolhida = document.querySelector('#dataEscolhida')
let titulo = document.querySelector('.titulo')
let descricao = document.querySelector('.descricao')
let img = document.querySelector('#img')

dataEscolhida.textContent =  Date()


function mudaData(data){
    let dataEscolhida = data
    let dataArr = []
    let mesArr = []
    let diaArr = []
    let anoArr = []
    
    mesArr.push(dataEscolhida[4], dataEscolhida[5], dataEscolhida[6])
    diaArr.push(dataEscolhida[8], dataEscolhida[9])
    anoArr.push(dataEscolhida[11], dataEscolhida[12], dataEscolhida[13], dataEscolhida[14])
    let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    
    let ano = parseInt(anoArr.join(''))
    let dia = (diaArr.join(''))
    let mesString = mesArr.join('')
    let mes = verificaMes(meses, mesString)
    
    

    
    function verificaMes(meses, mes){
       let mesEscolhido = mes
       var num = 0
        meses.forEach(function(mesAtual, index){
    
            if(mesAtual == mesEscolhido){
                num = index + 1
            } 
        })
        return num
    
    }

    dataArr.push(ano, mes, dia)
    return dataEscolhida = dataArr.join('-')
    
    
}
primeiraPagina(mudaData(dataEscolhida.textContent))

function primeiraPagina(data){
    dataEscolhida.textContent =data
    let request = new XMLHttpRequest()

    request.addEventListener('load', function(){
        console.log('to sendo carregada')
        if(request.status == 200){
            let apod = JSON.parse(this.responseText)
            console.log(apod)
            titulo.textContent = apod.title
            descricao.textContent = apod.explanation
            img.src = apod.url
        }
    })

    request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=on0i9oTa9JCp52kDLUCHjbuwNjtWvqgtwOvGlcQb&date=${data}`)

    request.send()

}




botao.addEventListener('click', function(evento){
evento.preventDefault()

    let dataString = data.value
    console.log(dataString)

    dataEscolhida.textContent = dataString
    let request = new XMLHttpRequest()

    request.addEventListener('load', function(){
        console.log('to sendo carregada')
        if(request.status == 200){
            let apod = JSON.parse(this.responseText)
            console.log(apod)
            titulo.textContent = apod.title
            descricao.textContent = apod.explanation
            img.src = apod.url
        }
    })

    request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=on0i9oTa9JCp52kDLUCHjbuwNjtWvqgtwOvGlcQb&date=${dataString}`)

    request.send()
    
})

