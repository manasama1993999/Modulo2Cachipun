//Eleccion de Usuario
const ElegirPapel = document.getElementById("papel1");
const ElegirPiedra = document.getElementById("piedra1");
const ElegirTijera = document.getElementById("tijera1");
//Imagenes Usuario CPU
const UsuarioImagen = document.getElementById("imgusuario");
const CPUImagen = document.getElementById("imgcpu");
//Juego
const Juego = document.getElementById("JuegosPPT");
const MensajeVencedor = document.getElementById("Logro");
//Contador
const resultadoUsuario = document.getElementById("resultadoUsuario");
const resultadoCPU = document.getElementById("resultadoCPU");
//Variables
let ElegirUsuario;
let CPUMano;
let imgUsuario;
let imgCPU;
let contador = 0;
//Imagenes seleccionadas
const imagenes = [
    { name: "Papel", url: "assets/img/mano.png" },
    { name: "Piedra", url: "assets/img/golpear.png" },
    { name: "Tijera", url: "assets/img/dos.png" }
];
//Juego
function Jugar(){
    Juego.style.display = 'none';
};
//Eleccion de Papel
ElegirPapel.addEventListener('click', function(){
    ElegirUsuario = "Papel";
    CPU();
});
//Eleccion de Piedra
ElegirPiedra.addEventListener('click', function(){
    ElegirUsuario = "Piedra";
    CPU();
});
//Eleccion de Tijera
ElegirTijera.addEventListener('click', function(){
    ElegirUsuario = "Tijera";
    CPU();
});
//Eleccion de CPU
function CPU(){
    var random = AleatorioCPU();

    if(random == 0){
        CPUMano = "Papel";
    }else if(random == 1){
        CPUMano = "Piedra";
    }else if(random == 2){
        CPUMano = "Tijera"
    };
    Jugadas();
};
//Jugadas
function Jugadas(){
    if(ElegirUsuario == CPUMano){
        MensajeVencedor.innerHTML = "Empate!";
    }else if(ElegirUsuario == "Piedra" && CPUMano == "Tijera"){
        MensajeVencedor.innerHTML = "Ganaste!!";
    }else if(ElegirUsuario == "Papel" && CPUMano == "Piedra"){
        MensajeVencedor.innerHTML = "Ganaste!!";
    }else if(ElegirUsuario == "Tijera" && CPUMano == "Papel"){
        MensajeVencedor.innerHTML = "Ganaste!!";
    }else{
        MensajeVencedor.innerHTML = "Perdiste!!";
    };
    Imagenes();
}
//Aleatorio de CPU
function AleatorioCPU(){
    let n = Math.floor(Math.random() * 3);
    return n;
}
//Insertar imagenes de eleccion de Jugador y CPU
function Imagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(ElegirUsuario == imagenes[i].name){
            imgUsuario = imagenes[i].url;
            var inserta = `<img class="img-juego" src=${imgUsuario} alt="">`;
            UsuarioImagen.innerHTML = inserta;
        };
        if(CPUMano == imagenes[i].name){
            imgCPU = imagenes[i].url;
            var inserta = `<img class="img-juego" src=${imgCPU} alt="">`;
            CPUImagen.innerHTML = inserta;
        };
    };
    Juego.style.display = 'flex';
};
window.addEventListener('load', Jugar);
//Contador
ElegirPapel.onClick = function(){
    contador++;
    resultadoUsuario = contador;
};
ElegirPiedra.onClick = function(){
    contador++;
    resultadoUsuario = contador;
};
ElegirTijera.onClick = function(){
    contador++;
    resultadoUsuario = contador;
};
CPUImagen.onClick = function(){
    contador++;
    resultadoCPU = contador;
}