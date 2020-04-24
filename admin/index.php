<?php
    require_once '../load.php';

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
    }

    if (isset($_GET['adult'])) {
        $adult = intval(trim($_GET["adult"]));
    }

    if (isset($_GET['year'])) {
        $year = intval(trim($_GET["year"]));

        $results = getMoviesByYear($tbl, $adult, $year);
    echo json_encode($results);

    } else if (isset($_GET['filter'])) {
    //Filter
        // 'tbl' => 'tbl_movies',
    $args = array(
        'tbl'=> $tbl,
        'tbl2'=>'tbl_genre',
        'tbl3'=>'tbl_mov_genre',
        'col'=>'movies_id',
        'col2'=>'genre_id',
        'col3'=>'genre_name',
        'filter'=>$_GET['filter'],
    );

    $results = getMoviesByFilter($args);
    echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));

} else {
    
    $results = getAll($tbl, $adult);
    echo json_encode($results);
}
