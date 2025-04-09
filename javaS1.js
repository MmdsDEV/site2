// Mensagem com efeito especial ao clicar no botão
document.getElementById("botao").addEventListener("click", function() {
    const mensagem = document.createElement('div');
    mensagem.textContent = "Te esperamos com abraços e sorrisos!";
    mensagem.style.position = 'fixed';
    mensagem.style.top = '50%';
    mensagem.style.left = '50%';
    mensagem.style.transform = 'translate(-50%, -50%)';
    mensagem.style.padding = '20px';
    mensagem.style.backgroundColor = '#800080'; /* Fundo roxo escuro */
    mensagem.style.color = '#fff';
    mensagem.style.borderRadius = '10px';
    mensagem.style.fontSize = '18px';
    mensagem.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    mensagem.style.opacity = '1';
    mensagem.style.transition = 'opacity 1s ease, transform 1s ease';
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.style.opacity = '0';
        mensagem.style.transform = 'translate(-50%, -60%)';
        setTimeout(() => mensagem.remove(), 1000);
    }, 2000);
});

// Efeito de rastro roxo no mouse
document.addEventListener("mousemove", function(event) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = event.pageX + "px";
    trail.style.top = event.pageY + "px";
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 1000);
});