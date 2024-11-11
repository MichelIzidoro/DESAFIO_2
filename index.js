function ranking() {
    let heroi = "Michel";
    let numberVitorias = 199;
    let numberDerrotas = 90;
    let rankingFinal = numberVitorias - numberDerrotas;

    if (rankingFinal <= 10) {
        console.log(heroi + " Seu nível é FERRO");
    } 
        else if (rankingFinal >= 11 && rankingFinal <= 20) {
        console.log(heroi + " Seu nível é BRONZE");
    } 
         else if (rankingFinal >= 21 && rankingFinal <= 50) {
        console.log(heroi + " Seu nível é PRATA");
    } 
        else if (rankingFinal >= 51 && rankingFinal <= 80) {
        console.log(heroi + " Seu nível é OURO");
    } 
         else if (rankingFinal >= 81 && rankingFinal <= 90) {
        console.log(heroi + " Seu nível é DIAMANTE");
    } 
        else if (rankingFinal >= 91 && rankingFinal <= 100) {
        console.log(heroi + " Seu nível é LENDÁRIO");
    } 
        else if (rankingFinal >= 101) {
        console.log(heroi + " Seu nível é IMORTAL");
    }

    console.log("O Herói tem um saldo de " + rankingFinal + " e está no nível descrito acima.");
}

ranking();
