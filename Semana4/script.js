document.addEventListener("DOMContentLoaded", function () {
    const containerDestinos = document.querySelector(".container-destinos");
  
    
    if (containerDestinos) {
      
      function capturarInformacoes() {
        
        const roteiros = [];
  
        
        containerDestinos.querySelectorAll(".roteiros-viagens").forEach((roteiro) => {
          // Captura as informações do roteiro
          const destino = roteiro.querySelector(".roteiro-destino").textContent;
          const preco = roteiro.querySelector(".roteiro-preco").textContent;
  
          
          const inclusoes = Array.from(roteiro.querySelectorAll(".roteiro-incluso > li")).map((item) => item.textContent);
  
          
          roteiros.push({
            destino,
            preco,
            inclusoes,
          });
        });
  
        
        console.log(roteiros);
      }
  
      
      const botoesCompra = containerDestinos.querySelectorAll(".roteiro-comprar");
  
      
      if (botoesCompra) {
        
        botoesCompra.forEach((botao) => {
          botao.addEventListener("click", capturarInformacoes);
        });
      }
    }
  });
  