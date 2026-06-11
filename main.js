document.getElementById("mensagemBtn").addEventListener("click", () => {

    alert(
        "O agro sustentável garante produção de alimentos, preservação ambiental e qualidade de vida para as futuras gerações."
    );

});

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.textContent = "☀️ Modo Claro";
    }else{
        temaBtn.textContent = "🌙 Modo Escuro";
    }

});

function animar(id, final){

    let atual = 0;

    const contador = setInterval(() => {

        atual++;

        document.getElementById(id).textContent = atual;

        if(atual >= final){
            clearInterval(contador);
        }

    }, 40);
}

animar("num1", 15);
animar("num2", 20);
animar("num3", 30);