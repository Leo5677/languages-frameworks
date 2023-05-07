import readline from "readline";

/* CONFIGURA O READLINE */
const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* FUNÇÃO PARA CALCULAR O IMC */
function calcularIMC() {
  interacao.question(
    "Qual o seu peso? (Ex: 60 ou 60,50 ou 60.50) -> ",
    (pesoInformado) => {
      /* VERIFICA SE O PESO É UM VALOR VÁLIDO */
      if (isNaN(parseFloat(pesoInformado))) {
        console.log("* Por favor, insira um peso válido.");
        calcularIMC();
      } else {
        /* VERIFICA SE A ALTURA É UM VALOR VÁLIDO */
        interacao.question(
          "Qual sua altura? (Ex: 1.80 ou 1,80) -> ",
          (alturaInformada) => {
            if (isNaN(parseFloat(alturaInformada))) {
              console.log("* Por favor, insira uma altura válida.");
              calcularIMC();
            } else {
              /* CASO AMBOS VALORES SEJAM VÁLIDOS, O IMC É CALCULADO */
              let peso = parseFloat(pesoInformado.replace(",", "."));
              let altura = parseFloat(alturaInformada.replace(",", "."));
              let imc = Number(peso / Math.pow(altura, 2)).toFixed(2);

              /* CATEGORIZA O IMC */
              if (imc < 18.5) {
                console.log("Magreza -> Seu IMC é de: " + imc);
              } else if (imc >= 18.5 && imc <= 24.9) {
                console.log("Normal -> Seu IMC é de: " + imc);
              } else if (imc >= 24.9 && imc <= 30) {
                console.log("Sobrepeso -> Seu IMC é de: " + imc);
              } else {
                console.log("Obesidade -> Seu IMC é de: " + imc);
              }

              /* ENCERRA A INTERAÇÃO COM O READLINE */
              interacao.close();
            }
          }
        );
      }
    }
  );
}
calcularIMC();
