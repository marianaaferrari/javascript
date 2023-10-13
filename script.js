var nome = "mariana"; // string
var sobrenome = "ferrari";
var idade = 16; // number
var altura = 1.69; // float
var dirige = false; // boolean



console.log("olá meu nome é "+ nome +" "+ sobrenome+ ", minha idade é " + idade+ " e minha altura é " + altura);


 var conta1 = 1;
 var conta2 = 2;

 // soma
var soma = conta1 + conta2;
console.log("a soma é: " + soma);

 // subtração 
var subtração = conta1 - conta2;
console.log("a subtração é: " + subtração);

 // multiplicação
var multiplicacao = conta1 * conta2;
console.log("a multiplicação é: " + multiplicacao);

 // divisão 
 var divisao = conta1 / conta2
 console.log("a divisão é: " + divisao);


 //window.alert("🤑💰")

 function Clique(){
    window.alert("oii mlk parabéns c clicou no botao");
 }
 //booleanos 
 var mari = 16
 var maioridade = 18;
 
 console.log("o aluno é maior de idade??")

 if(marimari > maioridade){
    console.log('é maior de idade');
 }
 else{
    console.log('é menor de idade');
 }

 //media de nota
 
 var media, n1, n2, n3 ;

 n1= prompt ("informe a primeira nota: ") ;
 n1= eval (n1) ;
 
 n2= prompt ("informe a segunda nota: ") ;
 n2= eval (n2) ;
 
 n3= prompt ("informe a terceira nota: ") ;
 n3= eval (n3) ;

 media = (n1 + n2 + n3)/3 ;

 if ( media >= 6 ) {
    console.log ("aprovado!");

 } else 

 if ( media <= 5 ) {
    console.log("reprovado!");

 } else 

    console.log("recuperação!");
 
 //media de notas
 
 //Bernarod tirou 10 na nota 1 e tirou 2 na nota2 e tirou 0 na nota 3, faça um var que caucule a média da nota do bernardo e imprima num console.log