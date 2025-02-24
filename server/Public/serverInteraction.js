// Connexió
let connexio;
let dibujarInt = 0;
let estrellasInt = 0;

let bgMusic = new Audio('./media/Music/backgroundMusic.mp3');
bgMusic.volume = 0.2;
let musicPlaying = false;

let specificCookie = getCookie("email");

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

if (!specificCookie) {
    window.location.href = "http://localhost:8000";
}


function init(jugador) {
    // Local o remot
    let domini;
    if (window.location.protocol == "file:") domini = "localhost";
    else domini = window.location.hostname;

    // Creació de la connexió
    let url = "ws://" + domini + ":8180";
    connexio = new WebSocket(url);

    // Quan s'obre la connexió, enviar missatge al servidor
    connexio.onopen = () => {
        connexio.send("Hola a tothom!");
        if(jugador == true) JSON.stringify({action: "generarNave"}) 
        connexio.send("Hola a tothom!");
    }

    // Quan arriba un missatge, mostrar-lo per consola
    connexio.onmessage = e => {
            try {
            let l = JSON.parse(e.data);
            if(l.TuId != null) 
                {
                    idJugador = l.TuId;

                    alert(idJugador);
                }
            else if((l[0].img == 'lego-block.svg')) estrellas = l;
            else if((l[0] >= 0)) puntosEquipos = l;
            else players = l;
        } catch (error) {
            if(typeof(e.data) == typeof(""))
                {
                    if(e.data.includes("Gana"))
                        {
                            setTimeout(function(){alert(e.data);},100);
                        }
                    /*let d = document.querySelector('chat');
                    d.innerHTML += "<p>" + e.data + "</p>";
                    d.scroll(0,d.scrollHeight);*/
                } 
        }

    }
    
    // Quan es produeix un error, mostrar-lo per consola
    connexio.onerror = error => {
        alert("Error en la connexió: " + error);
    }
    dibujarInt = setInterval(function(){dibujarNaves(players)},1000/60);
    estrellasInt = setInterval(function(){dibujarEstrellas(estrellas)},1000/60);
}
// Recivir datos
function actualizarPartida(event)
{
    let js = JSON.stringify({action: "actualizar", server: 0 ,id: idJugador});
    enviar(event,js);
}
setInterval(actualizarPartida,1000/60);
// Mover
let keyCodeMovementL = false;
let keyCodeMovementR = 0;
let keyCodeMovementU = 0;
let keyCodeMovementD = 0;
let keyCodeSpace = 0;
let keyCodeSpaceValue = 0;
$(window).on("keydown",naveTeclado);    
$(window).on("keyup",naveTeclado);    
setInterval(mover,20);
function mover(event)
{

    let js = JSON.stringify({action: "mover", id: idJugador,up: keyCodeMovementU,dw: keyCodeMovementD,le: keyCodeMovementL,ri: keyCodeMovementR,sp: keyCodeSpaceValue, spPres: keyCodeSpace})
    enviar(event,js);
}

/*$(window).on("mousedown",dispararRaton);    
$(window).on("contextmenu",menu);    
$(window).on("mouseup",dispararRaton);*/    

    function naveTeclado(event)
    {
        event.defaultPrevented;
            {
                if(event.type == "keydown")
                    {
                    
                        if((event.key == "ArrowLeft" || event.code == "KeyA") && keyCodeMovementL == false)
                            {
                                keyCodeMovementL = true;
                                event.preventDefault();
                                if(musicPlaying == false) {
                                    bgMusic.play();
                                    bgMusic.loop = true;
                                    musicPlaying = true;
                                }
                            }
                        if((event.key == "ArrowRight" || event.code == "KeyD") && keyCodeMovementR == false)
                            {
                                keyCodeMovementR = true;
                                event.preventDefault();
                                if(musicPlaying == false) {
                                    bgMusic.play();
                                    bgMusic.loop = true;
                                    musicPlaying = true;
                                }
                            }
                        if((event.key == "ArrowUp" || event.code == "KeyW") && keyCodeMovementU == false)
                            {
                                keyCodeMovementU = true;
                                event.preventDefault();
                                if(musicPlaying == false) {
                                    bgMusic.play();
                                    bgMusic.loop = true;
                                    musicPlaying = true;
                                }
                            }
                        if((event.key == "ArrowDown" || event.code == "KeyS") && keyCodeMovementD == false)
                            {
                                keyCodeMovementD = true;
                                event.preventDefault();
                                if(musicPlaying == false) {
                                    bgMusic.play();
                                    bgMusic.loop = true;
                                    musicPlaying = true;
                                }
                            }
                        if((event.key == " " || event.code == "Enter") && keyCodeSpace == false)
                            {
                                keyCodeSpace = true;
                                keyCodeSpaceValue == false? keyCodeSpaceValue = true: keyCodeSpaceValue = false; 

                                pickUp.play();

                                event.preventDefault();
                            }
                        
                        
                        
                    }else if(event.type == "keyup")
                        {
                            if((event.key == "ArrowLeft" || event.code == "KeyA") && keyCodeMovementL == true)
                                {
                                    keyCodeMovementL = false;
                                }
                            if((event.key == "ArrowRight" || event.code == "KeyD") && keyCodeMovementR == true)
                                {
                                    keyCodeMovementR = false;
                                }
                            if((event.key == "ArrowUp" || event.code == "KeyW") && keyCodeMovementU == true)
                                {
                                    keyCodeMovementU = false;
                                }
                            if((event.key == "ArrowDown" || event.code == "KeyS") && keyCodeMovementD == true)
                                {
                                    keyCodeMovementD = false;
                                }
                            if((event.key == " " || event.code == "Enter") && keyCodeSpace == true)
                                {
                                    keyCodeSpace = false;
                                    if(keyCodeSpaceValue == false)
                                        {
                                            keyCodeSpaceValue = true;
                                            setTimeout(function(){
                                                keyCodeSpaceValue = false;
                                            },20);
                                        } 
                                }
                            
                        }
            }
    }

//Jugadores
//let players = [{id:"player1",img:"rocketBlue.svg",x:0,y:0},{id:"player2",img:"rocketGreen.svg",x:0,y:0}];
let players = [];
let tamanoNaves = [];
tamanoNaves["Rockets"] = {w:30,h:50};
tamanoNaves["Planes"] = {w:50,h:50};
let idJugador = "player1"
function dibujarNaves(naves)
{
    let partida = $(".jugadores");
    naves.forEach(element => {
        let id = "#"+element.id;
        let extension = ".svg";
        if(idJugador == element.id) extension = "M"+extension;
        let div = $(id);
        if($(div).length == 0)
            {
                div = $('<div class="DivPlayer" id="'+element.id+'" style="top:'+element.x+'px; left:'+element.y+'px; transform: rotate('+element.rot+'deg);">'+
                    '<iframe src="./media/'+element.img+extension+'" width="'+element.w+'" height="'+element.h+'" class="player" title="SVG"></iframe></div>');
                $(partida).append(div);
            }
        $(div).css({top: element.y+"px", left: element.x+"px",transform: 'rotate('+element.rot+'deg)'})  
        let iframe = $(div).find("iframe");
        if($(iframe).attr("src") != "./media/"+element.img+extension)$(iframe).attr("src","./media/"+element.img+extension);  
    });
    let navesDibujadas = $(partida).find(".DivPlayer");
    for(let i = 0; i < $(navesDibujadas).length; i++)
        {
            let id = ($(navesDibujadas[i]).prop("id"));
            let index = players.findIndex(obj => obj.id == id) ?? null; 
            if(index == -1)
                {
                    navesDibujadas[i].remove();
                }
        }
    actualizarPuntos();
}
function actualizarPuntos()
{
    let tablero = $(".StHt");
    let txt = ("Verdes: " + puntosEquipos[0] + "\n"+ "Rojos: " + puntosEquipos[1]);
    if($(tablero).html() != txt)
        {
            $(tablero).html(txt);
            dibujarTorre(puntosEquipos[0],puntosEquipos[1],puntosEquipos[2]);
        }

}
//Estrellas
let estrellas = []; //Array de bloques
let puntosEquipos = [0,0];
function dibujarEstrellas(estrellas)
{
    let partida = $(".estrellas");

    estrellas.forEach(element => {
        let id = "#"+element.id;
        let div = $(id);
        if($(div).length == 0)
            {
                div = $('<div class="DivEstrella" id="'+element.id+'" style="top:'+element.x+'px; left:'+element.y+'px;">'+
                    '<iframe src="./media/Components/'+element.img+'" width="20" height="20" class="estrella" title="SVG"></iframe></div>');
                $(partida).append(div);
            }
        $(div).css({top: element.y+"px", left: element.x+"px",transform: 'rotate('+element.rot+'deg)'})  
    });
    let navesDibujadas = $(partida).find(".DivEstrella");
    for(let i = 0; i < $(navesDibujadas).length; i++)
        {
            let id = ($(navesDibujadas[i]).prop("id"));
            let index = estrellas.findIndex(obj => obj.id == id) ?? null; 
            if(index == -1)
                {
                    navesDibujadas[i].remove();
                }
        }
}
function dibujarTorre(puntosVerde,puntosRojo,max)
{
    let multiplicador = 15/max; //Las torres siempre son de 15
    console.log(puntosRojo);
    puntosRojo = Math.floor(puntosRojo*multiplicador);
    puntosVerde = Math.floor(puntosVerde*multiplicador);

    if(!(puntosRojo > max || puntosVerde > max))
        {
            let redT = $(".TorreRed").find("*");
            let greenT = $(".TorreGreen").find("*");
            if(puntosRojo > 0) $(redT).prop("src","./media/Components/torre/red/"+puntosRojo+"b.svg");
            else $(redT).prop("src","");
            if(puntosVerde > 0) $(greenT).prop("src","./media/Components/torre/green/"+puntosVerde+"b.svg");
            else $(greenT).prop("src","");
        }

}

// Enviar missatge

function enviar(ev,message) {
    let missatge = message;
    connexio.send(missatge);
    //alert(missatge.value.replace(/\r\n|\r|\n/g,"<br>"));
    missatge.value = "";
    //missatge.focus();
    if (ev) ev.preventDefault();
}

function enter(ev) {
    let key = window.event.keyCode;

    if (key === 13 && !ev.shiftKey) {
        enviar();
        ev.preventDefault();
        return false;
    }
    else {
        return true;
    }
}
