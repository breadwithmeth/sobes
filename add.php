<?php
error_reporting(E_ERROR);
$mysqli = mysqli_connect("localhost", "testuser", "testpassword", "sobes");


//$photoData = addslashes(file_get_contents($_FILES['photo']['tmp_name']));
//$photoProp = getimageSize($_POST['photo']['tmp_name']);

//move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_POST["username"]);
$photoData = addslashes(file_get_contents($_FILES['file']['tmp_name']));
        $photoProp = getimageSize($_FILES['file']['tmp_name']);


$date = "date";
$address = "address";
$query = "INSERT INTO people(id, first_name, middle_name, last_name, date, phone_number, address, photo, photo_prop) VALUES({$_POST["id"]}, '{$_POST["first_name"]}', '{$_POST["middle_name"]}', '{$_POST["last_name"]}', '{$_POST["date"]}', '{$_POST["phone_number"]}', '{$_POST["address"]}', '{$photoData}', '{$photoProp['mime']}')";
$current_id = mysqli_query($mysqli, $query) or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_error($mysqli));
if (isset($current_id)) {
    header("Location: add.php");
}

?>

