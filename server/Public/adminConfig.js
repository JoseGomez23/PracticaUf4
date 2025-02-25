


document.getElementById("saveButton").addEventListener("click", () => {

    let spawnRate = $("#spawnRate").val();
    let maxPedres = $("#maxPedres").val();
    let js = JSON.stringify({action: "iniciar", spRate:spawnRate,mxP:maxPedres});
    enviar(new Event(""),js);
});

document.getElementById("stopButton").addEventListener("click", () => {
    
    resetPartida();
});