<?php

class GestioUsuaris {

    public static $conexio;

    
    public function __construct($conexio) {
        GestioUsuaris::$conexio = $conexio;
    }

    
    public function getUsuaris() {
        $sql = "SELECT * FROM players";
        $result = GestioUsuaris::$conexio->query($sql);
        return $result;
    }

    
    public static function getUsuari($username) {
        $sql = "SELECT * FROM players WHERE username = :username";
        
        
        $stmt = GestioUsuaris::$conexio->prepare($sql);
        
        
        $stmt->bindParam(':username', $username);

        
        $stmt->execute();

        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    
    public function insertUsuari($username, $password, $admin) {
        $sql = "INSERT INTO players (username, password, admin) VALUES (:username, :password, :admin)";
        
        
        $stmt = GestioUsuaris::$conexio->prepare($sql);
        
        
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':admin', $admin);

        
        $stmt->execute();

        return $stmt;
    }

    
    public function getUsuariStars() {
        $sql = "SELECT username, currentStars FROM players";
        $result = GestioUsuaris::$conexio->query($sql);
        return $result;
    }

    
    public function updateStarsUsuari($username, $currentStars, $starsCollected) {
        $sql = "UPDATE players SET currentStars = :currentStars, starsCollected = :starsCollected WHERE username = :username";
        
        
        $stmt = GestioUsuaris::$conexio->prepare($sql);
        
        
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':currentStars', $currentStars);
        $stmt->bindParam(':starsCollected', $starsCollected);

        
        $stmt->execute();

        return $stmt;
    }
}


require_once dirname(__DIR__) . '/connection/conexio.php';
global $conexio;


$init = new GestioUsuaris($conexio);

?>
