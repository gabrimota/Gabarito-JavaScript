 
var resposta = [] ;
var boletim = [] ;
var acertos = [];
var erros = [];
var media
function aleatorio(tamanho) {
    
    var caracteres = 'ABCDE';
        for (var i = 0; i < tamanho; i++) {
         boletim[i] = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    } 
        for (var i = 0; i < tamanho; i++) {
        resposta[i] = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    } 
        return boletim, resposta;
} 
 aleatorio(50);
    for(i=0; i<50; i++){
        if( boletim[i] == resposta[i]){
            console.log("Questão: " + i + " Gabarito: " + boletim[i] + " Resposta: " + resposta[i] + " Você acertou \n");
            acertos++;
            acertos[i] = resposta[i];
            } else {
                console.log("Questão: " + i + " Gabarito: " + boletim[i] + " Resposta: " + resposta[i] +  " Você errou \n");
             erros++;
             erros[i] = resposta[i];
            }
        }
     media = acertos * 0.2;

    console.log("Erros: ", erros);
    console.log("Acertos: ", acertos);
    console.log("Média: ", media);
     

    
   
