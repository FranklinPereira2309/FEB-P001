function inserirRoteiro() {
    const destinoInput = document.getElementById('destino');
    const precoInput = document.getElementById('preco');
    const inclusoesInput = document.getElementById('inclusoes');
    const imagemInput = document.getElementById('imagem');
    
    
    if (!destinoInput.value || !precoInput.value || !inclusoesInput.value || !imagemInput.value) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }else {
        const novoRoteiro = document.createElement('div');
        novoRoteiro.classList.add('roteiros-viagens');
    
       
        const imagem = document.createElement('img');
        imagem.src = imagemInput.value;
        imagem.classList.add('postal');
        novoRoteiro.appendChild(imagem);
    
        
        const destino = document.createElement('div');
        destino.classList.add('roteiro-destino');
        destino.textContent = destinoInput.value;
        novoRoteiro.appendChild(destino);
    
        
        const inclusoes = document.createElement('ul');
        inclusoes.classList.add('roteiro-incluso');
        inclusoesInput.value.split(',').forEach((itemText) => {
            const item = document.createElement('li');
            item.textContent = itemText.trim();
            inclusoes.appendChild(item);
        });
        novoRoteiro.appendChild(inclusoes);
    
        
        const preco = document.createElement('div');
        preco.classList.add('roteiro-preco');
        preco.textContent ="R$ " + precoInput.value;
        novoRoteiro.appendChild(preco);
    
        
        
    
        const containerDestinos = document.querySelector('.container-destinos');
        containerDestinos.appendChild(novoRoteiro);
        
        destinoInput.value = '';
        precoInput.value = '';
        inclusoesInput.value = '';
        imagemInput.value = '';
    }
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const botaoInserir = document.querySelector('button');
        botaoInserir.addEventListener('click', inserirRoteiro)
    
       
    });

    }
