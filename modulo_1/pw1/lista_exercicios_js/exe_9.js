/* 9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
Fórmula do IMC = peso / (altura) ²
Tabela Condições IMC
  
 Abaixo de 18,5   | Abaixo do peso          
 Entre 18,6 e 24,9 | Peso ideal (parabéns)  
 Entre 25,0 e 29,9 | Levemente acima do peso
 Entre 30,0 e 34,9 | Obesidade grau I 
 Entre 35,0 e 39,9 | Obesidade grau II (severa)
 Maior ou igual a 40 | Obesidade grau III (mórbida) */

 let peso, altura, imc 

 altura = 1.80
 peso = 135
 
 imc = peso / (altura * altura)
 
 if(imc <= 18.5){
 
     console.log(" Seu IMC", imc, "está abaixo do peso ideal")
 }if(imc >= 18.6 && imc <= 24.9){
     console.log("seu IMC", imc, "peso ideal, Parabens e não vacila hein")
 }if(imc >= 25 && imc <= 29.9){
     console.log("seu IMC", imc," levemente acima do peso, vai treinar")
 }if(imc >= 30 && imc <= 34.9){
     console.log("seu IMC", imc," Obesidade grau 1, vacila não gordão")
 }if(imc >= 35 && imc <= 39.9){
     console.log("seu IMC", imc,"obesidade severa, ta virando um x-bacon hein ")
 }if(imc >= 40){
     console.log("seu IMC", imc,"Obesidade Mórbida, a partir de agora vou te chamar de gordão da xj")
 }
 
 