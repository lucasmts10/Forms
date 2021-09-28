// Tratativa de formatar nomes com primeira letra maiúscula
export default function handleInicialMaiuscula(sentenca){
    if(sentenca === '' || typeof sentenca === undefined){
      return ''
    }
    const preposicoes = ['da','das','de','do','dos']
    const palavras = sentenca.trim().toLowerCase().split(" ")
    return palavras.map((palavra) => { 
        if(!preposicoes.includes(palavra)){
          return palavra[0].toUpperCase() + palavra.substring(1)
        } else {
          return palavra.toLowerCase()
        }
    }).join(" ")
  
}