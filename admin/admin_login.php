<?php 
    require_once '../load.php';

    $ip = $_SERVER['REMOTE_ADDR'];

    if(isset($_POST['username'])){ //checking to see if the form exists put 'username' instead of 'submit' to see if someone has actually written a username
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Log user in
            $message = login($username, $password, $ip);
        }else{
            $message = 'Please fill out the required field';
        }

        echo json_encode($message);
    }