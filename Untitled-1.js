const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.js"
console.log(url);

async function visualizarInformacoesGlobais (){
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem 
    ${dados.total_pessoas_mundo} de pessoas e 
    que aproximadamente ${dados.total_pessoas_conectadas}
    estão conectadas em algum rede sociale passam em média 
    ${dados.tempo_medio} horas conectadas`
    console.log(paragrafo)
}
visualizarInformacoesGlobais()
{
    "total_pessoas_conectadas"; 5.04e9,
    "total_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
}