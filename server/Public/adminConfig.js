
let spawnRate = document.getElementById("spawnRate");
let maxPedres = document.getElementById("maxPedres");
let statusAdmin = true;


document.getElementById("saveButton").addEventListener("click", () => {
    fetch("/updateConfig", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            statusAdmin: statusAdmin.value,
            spawnRate: spawnRate.value,
            maxPedres: maxPedres.value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});