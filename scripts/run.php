<?php

$servername = 'localhost';
$username = 'root';
$password = '12345678';
$db = 'election';

$conn = new mysqli($servername, $username, $password, $db);

if($conn->connect_error) {
    echo "Connection failed: " . $conn->connect_error;
    return ;
}

$json_data = file_get_contents('data.json');

$data = json_decode($json_data, true);

foreach ($data as $key => $value) {
    $state = $data[$key]['state'];
    $constituency = $data[$key]['constituency'];

    // Select the state id
    $sql = "SELECT id FROM states WHERE name = '$state'";
    $state_result = $conn->query($sql);
    $row = mysqli_fetch_assoc($state_result);
    $state_id = $row['id'];
    $sql = "INSERT INTO constituencies (name, state_id) VALUES ('$constituency', '$state_id')";
    $query_result = $conn->query($sql);
    if($query_result) {
        echo $value . " inserted successfully." . PHP_EOL;
    } else {
        echo $conn->error . PHP_EOL;
    }
}