// @ts-ignore
///<reference lib="es2015" />

async function pegarDadosApi(): Promise<any> {
  try {
    const apiKey: string = '0611d6be8e7e4d55a51edc9f9d35c2c3';
    const keyword: string = 'academic';
    const response: Response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`);
    const data: any = await response.json();
    return data;

  } catch (error) {
    console.log("Erro na chamada da Api: ", error);
  }
}

async function exibirNoticias(): Promise<void> {
  const data: any = await pegarDadosApi();
  console.log(data.articles);
  const containerLists: Element | null = document.querySelector('.noticias');

  for (let i: number = 0; i < 3; i++) {
    if (containerLists) {
      containerLists.innerHTML += `<li>
        <h4>${data.articles[i].title}</h4>
        <p>${data.articles[i].description}</p>
      </li>`;
    }
  }
}

exibirNoticias();