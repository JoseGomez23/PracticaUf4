


document.getElementById("saveButton").addEventListener("click", () => {

    let spawnRate = $("#spawnRate").val();
    let maxPedres = $("#maxPedres").val();
    let maxPunts = $("#maxPunts").val();
    let js = JSON.stringify({action: "iniciar", spRate:spawnRate,mxP:maxPedres,mxPun:maxPunts});
    enviar(new Event(""),js);
});

document.getElementById("stopButton").addEventListener("click", () => {
    
    resetPartida();
});