<!DOCTYPE html>
<html>

<head>
    <title>YOUR_TITLE</title>
    <meta name="description" content="YOUR_DESCRIPTION" />
    <meta name="keywords" content="YOUR_KEYWORDS" />
</head>

<!--#region Styles  -->
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="Edit.css" />
<!-- <link rel="stylesheet" type="text/css" href="yourCss.css" /> -->

<!--#endregion -->

<!--#region Scripts  -->

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script src="Sneakers.js"></script>
<script src="DB.js"></script>
<script src="Edit.js"></script>

<!--#endregion -->
<?php
include 'Utils.php';
$isEdit = false;
function debug_to_console($data)
{
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);
    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

if (isset($_POST['edit']) && isset($_POST['ID'])) {
    debug_to_console("EDIT ID:");
    debug_to_console($_POST['ID']);
    echo '<script type="text/JavaScript"> 
     GetItemById(' . $_POST['ID'] . ');
     </script>';
}

if (isset($_POST['delete'])) {
    debug_to_console("DELETE ID:");
    debug_to_console($_POST['ID']);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://localhost/Lab5/API.php?id=' . $_POST['ID'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'DELETE',
        CURLOPT_POSTFIELDS => array('id' => $_POST['ID']),
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    header("Location: http://localhost/Lab5/ShopItems.php");
}
?>

<body class="text-center">

    <script>
    </script>
    <form id="newItemForm" method="post" action="ShopItems.php " class="form-edit w-100 m-auto">
        <h1 class="h3 mb-3 fw-normal">
            <?php
            if (isset($_POST)) {
                if (isset($_POST['ID'])) {
                    $isEdit = true;
                    debug_to_console('Редактирование записи');
                } else {
                    debug_to_console('Создание записи');
                }
            }
            ?>
        </h1>
        <input type="text" class="d-none" id="hfDB" name="hfDB" title="hfDB" value="">
        <input type="text" class="d-none" id="hfObject" name="hfObject" title="hfObject" value="">
        <input type="text" class="d-none" id="hfID" name="hfID" title="hfID" value="<?php if (isset($_POST['ID'])) print $_POST['ID']; ?>">
        <div class="form-floating">
            <input type="text" class="form-control form-edit-topField" id="txbTitle" name="txbTitle" placeholder="название">
            <label for="txbTitle">Название</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control form-edit-middleField" id="txbDescription" name="txbDescription" placeholder="описание">
            <label for="txbDescription">Описание</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control form-edit-middleField" id="txbUrl" name="txbUrl" placeholder="http://www.someUrl.com">
            <label for="txbUrl">Ссылка на изображение</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control form-edit-bottomField" id="txbPrice" name="txbPrice" placeholder="999.999">
            <label for="txbPrice">Цена</label>
        </div>

        <button id="btnSave" name="save" class="w-100 btn btn-lg btn-primary my-1" onclick="Save()">Сохранить</button>
        <!-- <button id="btnDelete" name="delete" class="w-100 btn btn-lg btn-danger my-1" onclick="Delete()">Удалить</button> -->
        <button id="btnCancel" name="cancel" class="w-100 btn btn-outline-danger my-1" type="submit">Отмена</button>
    </form>
</body>

</html>