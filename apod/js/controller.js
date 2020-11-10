class UserControler{
    
    //pagina inicial
    PaginaInicial(data){
        console.log('controler funciona')
        let escolhaData = new UserModel()
        escolhaData.RecebeAData(data)
        
        let view = new UserView()
        view.MostraNaTela(escolhaData)
    }
    
    //depois que clicar o botão
    SelecionaDia(data){
        console.log('controler funciona')
        let escolhaData = new UserModel()
        escolhaData.RecebeAData(data)
        
        let view = new UserView()
        view.MostraNaTela(escolhaData)
        
    }
    
}
