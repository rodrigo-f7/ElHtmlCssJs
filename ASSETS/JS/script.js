
/*Mostrar Menu Responsivo
Função Mostrar menu faz com que o menu responsivo seja exibido de acordo com o clique no botão. O evento é chamado a partir do atributo html onclick = ""
*/
function showMenu(){
    //Identificando a div mobile-menu
    let mobileMenu = document.querySelector(".mobile-menu")

    //Identificando o ícone do menu
    let menuIcon = document.querySelector(".icon")

    /*Exibindo os elementos do menu
    Verifica se o mobile menu possui a classe open (com display block); se possuir, remove e troca a imagem para a inicial, se não, coloca a classe e troca para o ícone de x
    */
    if(mobileMenu.classList.contains("open")){
        mobileMenu.classList.remove("open")
        menuIcon.src = "ASSETS/IMG/menu_white_36dp.svg"

    } else{
        mobileMenu.classList.add("open")
        menuIcon.src = "ASSETS/IMG/close_white_36dp.svg"
    }
}