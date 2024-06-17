<?php
include 'registroCrud.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
 
    if (isset( $_POST['nombre'], $_POST['correo'], $_POST['contrasenia'])) {
   
        $nombres = $_POST['nombre'];
        $email = $_POST['correo'];
        $contrasenia = $_POST['contrasenia']; 
        $rol = 'usuario';


        $usuario_existente = getUserByEmail($email);
        if ($usuario_existente) {

            
            header("Location: index.html?showRegister=true");
            exit(); 
        } else {
            
            $result = addUser($nombres, $email, $contrasenia,$rol);

            if ($result) {
               
                header("Location: index.html?showLogin=true");
                exit();
            } else {
            
                echo 'Error al agregar usuario.';
            }
        }
    } else {
        echo 'Faltan datos del formulario.';
    }
} else {
    header("Location: index.html?showRegister=true");
    exit();
}
?>
