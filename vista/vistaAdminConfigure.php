<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuration</title>
    <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>
    <div class="container">
        <div >
        <label class="adminLabel" for="players">Number of players</label>
        <input class="adminInputs" type="number" id="nPlayers" name="nPlayers" min="2">
        </div>
        
        <div>
        <label  class="adminLabel" for="mode">Mode</label>
        <select class="adminInputs">
            <option value="stars">⭐</option>
            <option value="time">⏰</option>
        </select>
        </div>
        
        <div >
        <label class="adminLabel" for="timer">Timer</label>
        <input class="adminInputs" type="number" id="timer" name="timer" min="1">
        </div>
        <br>
        <button  class="startBt" id="start" name="start">START</button>
    </div>

</body>
</html>