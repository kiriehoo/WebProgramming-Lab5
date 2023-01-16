    <?php
    include 'Utils.php';
    #region Глобальные переменные
    $strId = "id";
    $strTitle = "title";
    $strDescription = "description";
    $strImageUrl = "imageUrl";
    $strPrice = "price";
    $fields  = array(
        $strTitle => $strTitle,
        $strDescription => $strDescription,
        $strImageUrl => $strImageUrl,
        $strPrice => $strPrice,
    );
    $fieldsWithId  = $fields;
    $fieldsWithId[$strId] = $strId;
    #endregion
    #region Методы
    function CheckFields($fieldsArray, $fieldsList)
    {
        //var_dump($fieldsArray);
        //var_dump($fieldsList);
        if (!isset($fieldsArray))
            return false;
        foreach ($fieldsList as $fieldName) {
            //var_dump($fieldsArray[$fieldName]);
            if (!isset($fieldsArray[$fieldName]))
                return false;
        }
        return true;
    }
    #endregion
    #region Получение списка всех элементов
    if (isset($_GET)) {
        //echo 'GET request';
        if (isset($_GET['tableName']) && !isset($_GET['id'])) {
            $conn = Connect("localhost", "root", "", "sneakers");
            $table = Select($conn, "*", "sneakers");
            echo json_encode(TableToArray($table));
        }
        //echo 'GET request';
        if (isset($_GET['tableName']) && isset($_GET['id'])) {
            $conn = Connect(
                "localhost",
                "root",
                "",
                "sneakers"
            );
            $table = Select(
                $conn,
                "*",
                "sneakers",
                "id=" . strval($_GET['id'])
            );
            echo json_encode(TableToArray($table));
        }
    }
    #endregion
    #region Добавление нового элемента
    if (CheckFields($_POST, $fields) && !isset($_POST['id'])) {

        $conn = Connect("localhost", "root", "", "sneakers");
        //$values = sprintf("'%s' , '%s' , '%s' , '%s'", $_POST["title"], $_POST["description"], $_POST["imageUrl"], $_POST["price"]);
        Insert($conn, "sneakers", $fields, $_POST);
        //echo "INSERT COMPLETE";
    } else {
        //echo "INSERT NOT COMPLETE";
    }
    #endregion
    #region Изменение существующего элемента
    if (CheckFields($_POST, $fields) && isset($_POST['id'])) {

        $conn = Connect("localhost", "root", "", "sneakers");
        //$values = sprintf("'%s' , '%s' , '%s' , '%s'", $_POST["title"], $_POST["description"], $_POST["imageUrl"], $_POST["price"]);
        Update($conn, "sneakers", $fieldsWithId, $_POST);
        //echo "INSERT COMPLETE";
    } else {
        //echo "INSERT NOT COMPLETE";
    }
    #endregion
    #region Удаление элемента
    if (isset($_SERVER['REQUEST_METHOD'])  && $_SERVER['REQUEST_METHOD'] == "DELETE" && isset($_GET['id'])) {
        var_dump($_SERVER['REQUEST_METHOD']);
        var_dump($_GET['id']);
        $conn = Connect("localhost", "root", "", "sneakers");
        Delete($conn, "sneakers", $_GET['id']);
    }
    #endregion
    ?>