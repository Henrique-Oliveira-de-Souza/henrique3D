import {getCSS, criarGrafico} from "./common.js"
import { getCSS, criarGrafico,incluirTexto } from "./common.js"
const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height:700,
    title:{
        
    }
}
const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container')
        .appendChild(grafico)
        const config = {
            responsive: true,
            displayModeBar: false
        }
        Plotly.newPlot(grafico,data,layout, config)
        criarGrafico(data,layout)
        incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número
        total de usuários entre as redes sociais, destaca-se como a <span>preferida dos usuários</span>.
        Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção
        mais apreciada pelos usuários,<br>Essa preferência evidencia a forte conexão e apreço que as 
        pessoas têm pelo Instagram em comparação com outras redes.`)
