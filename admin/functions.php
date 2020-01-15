<?php
    require('connect.php');

    function getPlanetData($conn){
        $getData = 'SELECT * FROM info';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row data into our array to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }