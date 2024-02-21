function partidas(vitoria, derota) {
    let result = vitoria - derota
    return result
  }

function rank() {
    let saldoVitoriaDerrota = partidas(120, 12)
    let nivel = ""

    switch (true) {
        case saldoVitoriaDerrota <= 10:
            nivel = "Ferro"
            break

        case saldoVitoriaDerrota > 11 && saldoVitoriaDerrota <= 20:
            nivel = "Bronze"
            break

        case saldoVitoriaDerrota > 21 && saldoVitoriaDerrota <= 50:
            nivel = "Prata"
            break

        case saldoVitoriaDerrota > 51 && saldoVitoriaDerrota <= 80:
            nivel = "Ouro"
            break

        case saldoVitoriaDerrota > 81 && saldoVitoriaDerrota <= 90:
            nivel = "Diamante"
            break

        case saldoVitoriaDerrota > 91 && saldoVitoriaDerrota <= 100:
            nivel = "Lendário"
            break

        case saldoVitoriaDerrota >= 101:
            nivel = "Imortal"
            break
            
        }
        return`O Herói tem de saldo de ${ saldoVitoriaDerrota } e está no nível ${ nivel }`  
}
console.log(rank())