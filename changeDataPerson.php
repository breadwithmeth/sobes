<?php
$mysqli = mysqli_connect("localhost", "testuser", "testpassword", "sobes");


//$photoData = addslashes(file_get_contents($_FILES['photo']['tmp_name']));
//$photoProp = getimageSize($_POST['photo']['tmp_name']);

//move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_POST["username"]);


$date = "date";
$address = "address";
$query = "UPDATE people SET first_name = '{$_POST["first_name"]}', middle_name = '{$_POST["middle_name"]}', last_name ='{$_POST["last_name"]}', date = '{$_POST["date"]}', phone_number ='{$_POST["phone_number"]}', address = '{$_POST["address"]}' WHERE id = {$_POST["id"]}";
$current_id = mysqli_query($mysqli, $query) or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_error($mysqli));
if (isset($current_id)) {
    header("Location: changeDataPerson.php");
}

echo($_POST["id"])

?>

