<?php

#region MySql
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "sneakers";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
//     debug_to_console("Connection failed: ");
// }

// $sql = "SELECT * FROM sneakers";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while ($row = $result->fetch_assoc()) {
//         echo "id: " . $row["id"] . " - Name: " . $row["title"] . " " . $row["description"] . "<br>";
//         debug_to_console($row["title"]);
//     }
// } else {
//     echo "0 results";
// }
// $conn->close();

function Connect($servername, $username, $password, $dbname)
{
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function Disconnect($conn)
{
    $conn->close();
}

function Select($conn, $columnsNames, $tableName, $condition = null)
{
    $sql = sprintf("SELECT %s FROM %s", $columnsNames, $tableName);
    if (isset($condition))
        $sql = sprintf("SELECT %s FROM %s WHERE %s", $columnsNames, $tableName, $condition);
    $result = $conn->query($sql);
    return $result;
}

function Insert($conn, $tableName, $columnsNames,  $values)
{
    $sql = sprintf("INSERT INTO %s ( %s ) VALUES ( '%s' )", $tableName, join(",", $columnsNames), join("','", $values));
    echo "INSERT SCRIPT: " . $sql;
    $result = $conn->query($sql);
    return $result;
}
//UPDATE table_name
//SET column1 = value1, column2 = value2, ...
//WHERE condition;
function Update($conn, $tableName, $columnsNames,  $values)
{
    echo "UPDATE";
    var_dump($columnsNames);
    var_dump($values);
    if (count($columnsNames) == count($values)) {
        $valuesStr = array();
        foreach ($columnsNames as $fieldName) {
            array_push($valuesStr, sprintf("`%s` = '%s'", $fieldName, $values[$fieldName]));
        }
        $sql  = sprintf("UPDATE `%s` SET %s WHERE id=%s", $tableName, join(",", $valuesStr), $values['id']);
        echo "UPDATE SCRIPT: " . $sql;
        $result = $conn->query($sql);
        return $result;
    }
}

function Delete($conn, $tableName, $id)
{
    echo "DELETE";
    if (isset($id)) {
        $sql  = sprintf("DELETE FROM `%s` WHERE id=%s", $tableName, $id);
        $result = $conn->query($sql);
        return $result;
    }
}

function TableToArray($tableSql)
{
    $emparray = array();
    while ($row = mysqli_fetch_assoc($tableSql)) {
        $emparray[] = $row;
    }
    return $emparray;
}

function PrintTable($table)
{
    if ($table->num_rows > 0) {
        while ($row = $table->fetch_assoc()) {
            echo $row;
            PrintToConsole($row);
        }
    } else {
        echo "0 results";
    }
}

#endregion




function PrintToConsole($data)
{
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log(\"Debug Objects: " . $output . "\" );</script>";
}
function PrintLn()
{
    echo '</br>';
}
