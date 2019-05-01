<?php

$db = mysqli_connect('localhost', 'root', '', 'jeca-baza');
$username = $_POST['username'];
$usermail = $_POST['usermail'];
$userphone = $_POST['userphone'];
$usermessage = $_POST['usermessage'];


$sql = "INSERT INTO poruke VALUES (NULL, '$username', '$usermail', '$userphone', '$usermessage')";
$query = mysqli_query($db, $sql);

if ($query) {
    echo "<h3>Poruka je uspešno poslata!!!</h3>";
}

mysqli_close($db);

?>