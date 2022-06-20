const taQueTaMrCatra = `
  Senta, senta, senta
  Senta, senta, senta
  Senta, senta, senta
  Agora vai A pretinha ta que ta, oi
  Ela ta que ta, oi
  Ela ta que ta, oi
  Ta doidinha pra ahm!
  Doidinha pra ui!
  Doidinha pra
  E a moreninha como é que ela ta ?
  E a moreninha como é que ela ta ?
  Ta que ta que ta que ta
  Ta que ta que ta que ta
  Ta que ta que ta que ta, oi
  Ta doidinha pra ahm!
  Ta que ta que ta que ta
  Ta que ta que ta que ta
  Ta que ta que ta que ta, oi
  Ta doidinha pra ahm!
  Toda loirinha, toda rosinhaaaa
  Ta que ta que ta que ta, oi
  Ela ta que ta, oi
  Ela ta que ta, oi
  Ta doidinha pra ahm!
  Ta que ta que ta que ta
  Ta que ta que ta que ta
  Ta que ta que ta que ta, oi
  Ta doidinha pra ahm!
`;

const expressao = (taQueTaMrCatra.match(/TA QUE TA/gi) || []).length // desconsiderando a diferença entre letras maiúsculas e minúsculas

console.log(expressao)

let newCatra = taQueTaMrCatra.replace(/Senta/gi, "Estuda")
let newCatra2 = newCatra.replace(/Ta doidinha pra ahm/gi, "Ta doidinha pra aprender")

console.log(newCatra2)