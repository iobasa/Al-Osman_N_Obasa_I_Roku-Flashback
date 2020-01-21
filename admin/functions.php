<?php
    require('connect.php');

    function getUser($conn){
        $getUser = 'SELECT * FROM users';
        $runQuery = $conn->query($getUser);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row data into our array to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }