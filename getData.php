<?php
$data = array();
$mysqli = mysqli_connect("localhost", "testuser", "testpassword", "sobes");
$query = "SELECT id, first_name, last_name, middle_name, photo, photo_prop FROM people";
    
    $result = mysqli_query($mysqli, $query) or die("<b>Error:</b> Problem on Retrieving Image BLOB<br/>" . mysqli_error($mysqli));
    while ($row = mysqli_fetch_array($result)) {
    //$row = mysqli_fetch_array($result);
    
        header("Content-type: " . $row["photo_prop"]);
    
        $img = 'data:' . $row["photo_prop"] . ';base64,' .base64_encode($row["photo"]);

        array_push($data, ["img"=>$img, "id"=>$row['id'], "first_name"=>$row['first_name'], "middle_name"=>$row['middle_name'], "last_name"=>$row['last_name'], ]);

        

    //echo '<img src="data:image/png;base64,'.base64_encode($row['photo']).'"/>';
    }
    echo json_encode($data);
?>