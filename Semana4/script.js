document.addEventListener("DOMContentLoaded", function () {
    const containerDestinos = document.querySelector(".container-destinos");
  
    
    if (containerDestinos) {
      
      function capturarInformacoes() {
        
        const roteiros = [];
  
       
        containerDestinos.querySelectorAll(".roteiros-viagens").forEach((roteiro) => {
          
          const destino = roteiro.querySelector(".roteiro-destino").textContent;
          const preco = roteiro.querySelector(".roteiro-preco").textContent;
  
          
          const inclusoes = Array.from(roteiro.querySelectorAll(".roteiro-incluso > li")).map((item) => item.textContent);
  
          
          roteiros.push({
            destino,
            preco,
            inclusoes,
          });
        });
  
        
        const roteirosJSON = JSON.stringify(roteiros, null, 2);
  
        
        console.log(roteirosJSON);
  
        
        const blob = new Blob([roteirosJSON], { type: "application/json" });
  
        // const link = document.createElement("a");
        // link.href = window.URL.createObjectURL(blob);
        // link.download = "roteiros.json";
        // link.click();
      }
  
      
      const botoesCompra = containerDestinos.querySelectorAll(".roteiro-comprar");
  
      
      if (botoesCompra) {
        
        botoesCompra.forEach((botao) => {
          botao.addEventListener("click", capturarInformacoes);
        });
      }
    }
  });
  