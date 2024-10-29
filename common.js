const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}
function criarGrafico(data,layout){
    const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container')
        .appendChild(grafico)
        Plotly.newPlot(grafico,data,layout)
}
function incluirTexto (texto){
    const container = document.getElementById
    ('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
    
}
export {getCSS, tickConfig,criarGrafico}