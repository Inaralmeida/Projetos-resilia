class UserModel{
    
    
    constructor(){
        console.log('to na model')
        this._dataEscolhida = ''
        this._titulo = ''
        this._descricao = ''
        this._image = ''
    }
    
    RecebeAData(data){
        
        
        let request = new XMLHttpRequest()
        
        console.log('Recebe data ta ok')
        
        
        request.addEventListener('load', ()=>
        {
            
            console.log('Resquest event funciona')
            if(request.status == 200){
                let dados = this._processaResponse(request.responseText)
                
                this._atualiza(dados)
                
            }
        })
        
        request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=on0i9oTa9JCp52kDLUCHjbuwNjtWvqgtwOvGlcQb&date=${data}`, false)
        
        request.send()
        
    }
    
    _processaResponse( responseString){
        let response = JSON.parse(responseString)
        return response
    }
    
    _atualiza(dados){
        this._dataEscolhida = dados.date
        this._titulo = dados.title
        this._descricao = dados.explanation
        this._image = dados.url
    }
    
    getDataEscolhida(){
        return this._dataEscolhida;
    }
    
    getTitulo(){
        return this._titulo;
    }
    
    getDescricao(){
        return this._descricao;
    }
    
    getImagem(){
        return this._image;
    }
    
}






