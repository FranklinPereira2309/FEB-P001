// @ts-ignore
///<reference lib="es2015" />

async function pegarDadosApi(): Promise<any> {
  try {
        
    const response: Response = await fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia?qtd=1`);
    
    const data: any = await response.json();
   
    return data;
    
  } catch (error) {
    console.log("Erro na chamada da Api: ", error);
  }
}

async function pegarDadosTempo(): Promise<any> {
  const apiKey = 'dcb9330c595ad9c592bbc318dedc757b'
  const lat = -14.796580070830135
  const lon = -39.17338240445384

  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (erro) {
      console.log("Erro na chamdada da Api: ", erro);
      
  }
}

async function exibirNoticias(): Promise<void> {
  const data: any = await pegarDadosApi();
  //console.log(data.items[0]);
  const containerLists: Element | null = document.querySelector('.noticias');

  for (let i: number = 0; i < 1; i++) {
    if (containerLists) {
      containerLists.innerHTML += `<li>
        <h6>${data.items[i].titulo}</h6>
        <p>${data.items[i].introducao}</p>
      </li>`;
    }
  }
}

async function mostrarOtempo(): Promise<void> {
  let temperatura = document.querySelector('.temperatura') as HTMLElement;
  let humidade = document.querySelector('.humidade') as HTMLElement;
  let maxTemperatura = document.querySelector('.maxTemp') as HTMLElement;
  let minTemperatura = document.querySelector('.minTemp') as HTMLElement;
  

  const data: any = await pegarDadosTempo();

  temperatura.innerText = parseInt(data.main.temp).toString();
  humidade.innerText = data.main.humidity.toString();
  maxTemperatura.innerText = parseInt(data.main.temp_max).toString();
  minTemperatura.innerText = parseInt(data.main.temp_min).toString();
  
}

exibirNoticias();
mostrarOtempo();