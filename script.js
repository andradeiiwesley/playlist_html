let musicas = [
  {
    titulo: "X1",
    artista: "Mc Cabelinho",
    src: "./musicas/x1-prod-dallass.mp3",
    img: "./img/mccabelinho.jpg",
  },
  {
    titulo: "Outro Patamar",
    artista: "Mc Cabelinho",
    src: "./musicas/outro-patamar-prod-ajaxx.mp3",
    img: "./img/mccabelinho1.jpg",
  },
  {
    titulo: "Little Hair",
    artista: "Mc Cabelinho",
    src: "./musicas/little-hair-ft-felp-22-xama-prod-pep-starling.mp3",
    img: "./img/mccabelinho2.jpg",
  },
  {
    titulo: "Me sinto abençoado",
    artista: "Mc Poze do Rodo ft. Filipe Ret",
    src: "./musicas/MC Poze do Rodo ft. Filipe Ret - Me Sinto Abençoado (prod. Ajaxx).mp3",
    img: "./img/retepoze.jpg",
  },
  {
    titulo: "Baile da Serra",
    artista: "Lit Up x Braão",
    src: "./musicas/Baile Da Serra  Lit Up x Braão Áudio Oficial (1).mp3",
    img: "./img/baile da serra.jpg",
  },
  {
    titulo: "Flores",
    artista: "Thxuzz",
    src: "./musicas/Thxuzz  Flores Official Video.mp3",
    img: "./img/thxuzzflores.jpg",
  },
  {
    titulo: "Filho do Dono",
    artista: "Oruam ft. Mc Cabelinho",
    src: "./musicas/Oruam ft MC Cabelinho  Filho do Dono prod Heron Martins.mp3",
    img: "./img/oruamcabelinho.jpg",
  },
  {
    titulo: "Não Faz Isso Comigo Não",
    artista: "TZ da Coronel",
    src: "./musicas/TZ da Coronel  Não Faz Isso Comigo Não Áudio Oficial Faixa12.mp3",
    img: "./img/naofazissocmg.jpg",
  },
  {
    titulo: "Assault - CARRO FORTE",
    artista: "Borges | Orochi | Chefin | Oruam | Bielzin ",
    src: "./musicas/Assault CARRO FORTE  Borges  Orochi  Chefin  Oruam  Bielzin prod TKN Bonk.mp3",
    img: "./img/assault.jpg",
  },
  {
    titulo: "Iphone Branco",
    artista: "Borges",
    src: "./musicas/Borges  Iphone Branco.mp3",
    img: "./img/borgesiphone.jpg",
  },
  {
    titulo: "Cara do Crime 2",
    artista: " MC Poze | Bielzin | MC Cabelinho | Xamã (prod. Neobeats)",
    src: "./musicas/A CARA DO CRIME 2 Cansou de Playboy  MC Poze  Bielzin  MC Cabelinho  Xamã prod Neobeats.mp3",
    img: "./img/caradocrime2.jpg",
  },
  {
    titulo: "GOSTOSINHO TU CAI",
    artista: "MC PEPEU",
    src: "./musicas/MC PEPEU  GOSTOSINHO TU CAI CLIPE OFICIAL Doug Filmes  DJ SWAT.mp3",
    img: "./img/pepeu.jpg",
  },
  {
    titulo: "TREM MAIS CARO",
    artista: "GORDÃO DO PC & JR",
    src: "./musicas/Trem Mais Caro ft Gordão do Pc  JR  DJ LG do SF .mp3",
    img: "./img/tremmaiscaro.jpg",
  },
  {
    titulo: "PREDOMINANTE",
    artista: "MC PAIVA",
    src: "./musicas/MC Paiva  Predominante Love Funk DJ Mayk.mp3",
    img: "./img/mcpaivapredominante.jpg",
  },
  {
    titulo: "O PODER DESSA GAROTA",
    artista: "MC GABZIN",
    src: "./musicas/MC GABZIN  O PODER DESSA GAROTA   Se eu te pedir pra ficar CLIPE OFICIAL Doug Filmes.mp3",
    img: "./img/poderdessagarota.jpg",
  },
  {
    titulo: "SIMPLESMENTE ELA",
    artista: "MC GABZIN",
    src: "./musicas/MC GABZIN  SIMPLESMENTE ELA  JOGA NA MINHA CARA Doug Filmes DJ MARCUS VINICIUS.mp3",
    img: "./img/simplesmenteela.jpg",
  },
];

let musica = document.querySelector("audio");

let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos

document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 15;
  }
  renderizarMusica(indexMusica);
  musica.play();
});

document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 15) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
  musica.play();
});

//Funções

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");

  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinuto = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinuto + ":" + campoSegundos;
}
