<?php
$id = $_POST["id"];

$mysqli = mysqli_connect("localhost", "testuser", "testpassword", "sobes");
$query = "DELETE FROM people WHERE id = {$id}";
$current_id = mysqli_query($mysqli, $query) or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_error($mysqli));



?>