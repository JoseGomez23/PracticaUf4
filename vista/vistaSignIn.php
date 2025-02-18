<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/menus.css">
    <title>Document</title>
</head>
<body>
    <div>
        <div class="semiTransparentSmall">
            <h1 class="StHt">STAR HUNTERS</h1>
        </div>
        <div class="semiTransparentMedium">
           <form method="post" action="../controlador/controladorSignin.php" >
                <input type="text" id="username" name="username" class="loginInp" placeholder="Usernsame">
                <input type="password" id="password" name="password" class="loginInp" placeholder="Password">
                <input type="password" id="password2" name="password2" class="loginInp" placeholder="Repeat Password">
                <button type="submit" class="smallSubm">Login</button>
            </form>
        </div>
    </div>
</body>
</html>