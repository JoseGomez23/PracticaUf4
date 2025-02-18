<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/menus.css">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            max-width: 1200px;
        }

        .item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .image-container {
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .image-container p {
            font-size: 24px;
            margin: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">
            <div class="image-container">
                <p>&lt;</p>
                <img src="../media/Ovnis/ovniBlue.svg" alt="ovniBlue">
                <p>&gt;</p>
            </div>
            <div>
                <label for="price">Price: </label>
                <p>100⭐</p>
                <button>Buy</button>
            </div>
        </div>
        <div class="item">
            <div class="image-container">
                <p>&lt;</p>
                <img src="../media/Rockets/rocketBlue.svg" alt="RocketBlue">
                <p>&gt;</p>
            </div>
            <div>
                <label for="price">Price: </label>
                <p>200⭐</p>
                <button>Buy</button>
            </div>
        </div>
        <div class="item">
            <div class="image-container">
                <p>&lt;</p>
                <img src="../media/Planes/planeBlue.svg" alt="PlaneBlue">
                <p>&gt;</p>
            </div>
            <div>
                <label for="price">Price: </label>
                <p>300⭐</p>
                <button>Buy</button>
            </div>
        </div>
    </div>
    <br>
    <div>
        <button>Go back</button>
    </div>
</body>
</html>
