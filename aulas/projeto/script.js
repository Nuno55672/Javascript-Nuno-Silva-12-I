//Engloba tudo o que o script irá fazer
$(function(){
    //Declaração de variáveis
    var vez = 1;
    var vencedor = "";
    //Função para detetar casas iguais e identificar o vencedor
    function casasIguais(a, b, c){
        //Determina se as casas são iguais
        var casaA = $("#casa"+a);
        var casaB = $("#casa"+b);
        var casaC = $("#casa"+c);
        var bgA = $("#casa"+a).css("background-image");
        var bgB = $("#casa"+b).css("background-image");
        var bgC = $("#casa"+c).css("background-image");
        //Indica o respetivo vencedor
        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.indexOf("1.jpg") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        //Não devolve resultado nenhum, sendo um empate
        else{
            return false;
        }
    }
    //Função para detetar as sequências e apresentar o vencedor
    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
            $("#resultado").html(`<h1>O jogador <font color="red"><b>${vencedor}</b></font> venceu! </h1>`);
            $(".casa").off("click");
        }
    }
    //Função para clicar nos quadrados e diferenciar os turnos
    $(".casa").click(function(){
        var bg = $(this).css("background-image");
        //Apresenta a imagem do respetivo jogador após selecionar um quadrado
        if(bg == "none" || bg == "")
        {           
            var fig = "url(" + vez.toString() + ".jpg)";
            $(this).css("background", fig);
            //Muda de turno
            vez = (vez == 1? 2:1);  
            verificarFimDeJogo();
        }
    });
});