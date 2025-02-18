<?php

class ControlLogin {

    public static $conexio;


    public function __construct($conexio) {

        ControlLogin::$conexio = $conexio;

    }
    

    public function checkUser() {

        if (isset($_POST['username']) && isset($_POST['password'])) {

            $username = $_POST['username'];
            $password = $_POST['password'];
            
            require_once dirname(__DIR__) . '/model/modelUsuaris.php';
            $user = GestioUsuaris::getUsuari($username);

            if ($user) {
                if (ControlLogin::checkUsername($user, $username) && ControlLogin::checkPassword($user, $password)) {
                    if(ControlLogin::checkAdmin($user)) {

                        $_SESSION['username'] = $username;
                        $_SESSION['admin'] = true;

                    } else {

                        $_SESSION['username'] = $username;

                    }
                    
                }
                
                header('Location: ../vista/mainLoged.php');
            } else {
                echo "Usuari o contrasenya incorrectes";
            }

        }
    }



    public function checkUsername($user, $username) {

        if ($user['username'] == $username) {
            return true;
        } else {
            return false;
        }

    }


    public function checkPassword($user, $password) {
        if (password_verify($password, $user['password'])) {
            return true;
        } else {
            return false;
        }
    }


    public function checkAdmin($user) {

        if ($user['admin'] == 1) {
            return true;
        } else {
            return false;
        }
    }
}

require_once dirname(__DIR__) . '/connection/conexio.php';
global $conexio;
$user = new ControlLogin($conexio);
$user->checkUser();

?>