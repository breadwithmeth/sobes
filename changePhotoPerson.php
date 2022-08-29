<?php
$mysqli = mysqli_connect("localhost", "testuser", "testpassword", "sobes");
$photoData = addslashes(file_get_contents($_FILES['file']['tmp_name']));
$photoProp = getimageSize($_FILES['file']['tmp_name']);


$query = "UPDATE people SET photo = '{$photoData}', photo_prop = '{$photoProp['mime']}' WHERE id = {$_POST["id"]}";
$current_id = mysqli_query($mysqli, $query) or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_error($mysqli));
if (isset($current_id)) {
    header("Location: changePhotoPerson.php");
}

echo($_POST["id"])

?>