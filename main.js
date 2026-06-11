const btnMensagem = document.getElementById("btnMensagem");

btnMensagem.addEventListener("click", function() {
    alert(
        "O agro sustentável une produtividade, inovação e preservação ambiental para garantir um futuro melhor."
    );
});

const btnTecnologia = document.getElementById("btnTecnologia");
const beneficiosTec = document.getElementById("beneficiosTec");

btnTecnologia.addEventListener("click", function() {

    beneficiosTec.innerHTML = `
        <h3>Benefícios da Tecnologia no Campo</h3>
        <ul>
            <li>Monitoramento das lavouras por drones.</li>
            <li>Economia de água e insumos.</li>
            <li>Maior produtividade.</li>
            <li>Redução de desperdícios.</li>
            <li>Menor impacto ambiental.</li>
        </ul>
    `;
});

let numero = document.getElementById("numero");
let contador = 0;

const animacao = setInterval(() => {

    contador++;

    numero.textContent = contador;

    if(contador >= 3){
        clearInterval(animacao);
    }

}, 800);