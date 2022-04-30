<?php

$db_host = "localhost";
$db_name = "studentinfo";
$db_user = "root";
$db_pass = "";

$conn = mysqli_connect($db_host, $db_name, $db_user, $db_pass);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit;
}

echo "Connected Successfully!!!";

$student_name = $_POST["studentname"];
$roll_no = $_POST["rollno"];
$nm = $_POST["nm"];
$os = $_POST["os"];
$dbms = $_POST["dbms"];
$sl = $_POST["sl"];
$se = $_POST["se"];


$sql = "INSERT INTO students (student_name, roll_no, nm, os, dbms, sl, se) VAUES ('" . $student_name . "','" . $roll_no . "','" . $nm . "', '" . $os . "','" . $dbms . "','" . $sl . "','" . $se . "')";

$result = mysqli_query($conn, $sql);

if ($result === false) {
    echo mysqli_error($conn);
} else {
    $id = mysqli_insert_id($conn);
    echo "Inserted record in:" . $id;
}
