<?php

if(isset($_GET))
{
    echo"si";
    $username = $_GET["username"];
    $server = $_GET["password"];
    header(header: 'Location: http://localhost:8080/Joc?username='.$username);
}

echo"as";
?>