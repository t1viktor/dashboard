// Função para gerar números aleatórios
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar dados simulados e gráficos
function atualizarDados() {
    // Dados aleatórios para os gráficos
    const dadosBarras = Array.from({ length: 5 }, () => gerarNumeroAleatorio(10, 100));
    const dadosLinha = Array.from({ length: 5 }, () => gerarNumeroAleatorio(10, 100));
    const dadosPizza = Array.from({ length: 3 }, () => gerarNumeroAleatorio(10, 100));

    // Atualiza os gráficos com os novos dados
    barChart.data.datasets[0].data = dadosBarras;
    barChart.update();

    lineChart.data.datasets[0].data = dadosLinha;
    lineChart.update();

    pieChart.data.datasets[0].data = dadosPizza;
    pieChart.update();
}

// Função para mostrar o gráfico correspondente
function mostrarGrafico(id) {
    // Seleciona todos os containers de gráficos
    const charts = document.querySelectorAll('.chart-container');

    // Esconde todos os gráficos removendo a classe 'active'
    charts.forEach(chart => {
        chart.classList.remove('active');
    });

    // Mostra o gráfico com o ID correspondente adicionando a classe 'active'
    document.getElementById(id).classList.add('active');
}

// Adiciona eventos de clique aos botões para alternar entre os gráficos
document.getElementById("buttonPieChart").addEventListener("click", function() {
    mostrarGrafico('containerPieChart');
});

document.getElementById("buttonBarChart").addEventListener("click", function() {
    mostrarGrafico('containerBarChart');
});

document.getElementById("buttonLineChart").addEventListener("click", function() {
    mostrarGrafico('containerLineChart');
});

// Adiciona evento de clique ao botão de atualizar
document.getElementById("buttonUpdate").addEventListener("click", atualizarDados);

// Função para inicializar os gráficos com Chart.js
function inicializarGraficos() {
    // Gráfico de Barras
    const ctxBar = document.getElementById('barChart').getContext('2d');
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Vendas Mensais',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Linha
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Crescimento Mensal',
                data: [15, 25, 5, 10, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Pizza
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Produto A', 'Produto B', 'Produto C'],
            datasets: [{
                label: 'Distribuição de Produtos',
                data: [30, 50, 20],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Mostra o primeiro gráfico por padrão
    mostrarGrafico('containerBarChart');
}

// Inicializa os gráficos quando a página é carregada
document.addEventListener('DOMContentLoaded', inicializarGraficos);
