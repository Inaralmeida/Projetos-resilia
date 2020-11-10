class UserView{
    
    MostraNaTela(data){

        let titulo = document.querySelector('.titulo')
        titulo.textContent = data.getTitulo()
        
        let descricao = document.querySelector('.descricao')
        descricao.textContent = data.getDescricao()
        
        let img = document.querySelector('#img')
        img.src = data.getImagem()
        
        let dataEscolhida = document.querySelector('#dataEscolhida')
        dataEscolhida.textContent = data.getDataEscolhida()
        
        
        
    }
}