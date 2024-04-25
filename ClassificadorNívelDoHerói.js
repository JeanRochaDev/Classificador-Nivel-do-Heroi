let heroi_nome = "Jean"
let heroi_experiencia = 9980
let heroi_nivel = ""

let notificacao_de_nivel = ""

if (heroi_experiencia <= 1000) {
    heroi_nivel = "Ferro" ;
}
if (heroi_experiencia >= 1000 && heroi_experiencia < 2000) {
    heroi_nivel = "Bronze" ;
}
if (heroi_experiencia >= 2000 && heroi_experiencia < 5000) {
    heroi_nivel = "Prata" ;
}
if (heroi_experiencia >= 5000 && heroi_experiencia < 7000) {
    heroi_nivel = "Ouro" ;
}
if (heroi_experiencia >= 7000 && heroi_experiencia < 8000) {
    heroi_nivel = "Platina" ;
}
if (heroi_experiencia >= 8000 && heroi_experiencia < 9000) {
    heroi_nivel = "Ascendente" ;
}
if (heroi_experiencia >= 9000 && heroi_experiencia < 10000) {
    heroi_nivel = "Imortal" ;
}
if (heroi_experiencia >= 10001) {
    heroi_nivel = "Radiante" ;
}


notificacao_de_nivel = ("O Herói de nome " + heroi_nome + " " + "está no nível de " + heroi_nivel)

console.log(notificacao_de_nivel)