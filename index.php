<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <main>
        <div id="addData">
            <form name="formAddData" id="formAddData" action="#" method="post" enctype="multipart/form-data">
            <input class="inputAddNew" type="text" name="id" placeholder="ИИН"> <br>
                <input class="inputAddNew" type="text" name="last_name" placeholder="Фамилия"> <br>
                <input class="inputAddNew" type="text" name="first_name" placeholder="Имя"> <br>
                <input class="inputAddNew" type="text" name="middle_name" placeholder="Отчество"> <br>
                <label for="date">Дата рождения:</label><br><input class="inputAddNew" type="date" name="date" value="1999-12-30" placeholder="Дата рождения"> <br>
                <label for="address">Адрес:</label><br><input class="inputAddNew" type="text" name="address"> <br>
                <label for="phone_number">Телефон:</label><br><input class="inputAddNew" type="tel" pattern="[0-9]{11}"required name="phone_number"> <br>
                <label for="photo">Фотография:</label><br><input id="photoUpload" class="inputAddNew" type="file" src="" alt=""> <br>
                <input class="inputAddNew" type="submit" value="Добавить" >
            </form>
        </div>
        <div id="viewTable">
            <table id="viewTableTable">
                <tr>
                    <th>ИИН</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
                </table> 
        </div>
        <div id="editPerson">
            <form name="editPersonForm" id="editPersonForm" action="" action="#" method="post" enctype="multipart/form-data">
                <input type="submit" value="Изменить">
            </form>
            <button onclick="deletePerson(this)">Удалить</button>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="index.js"></script>
</body>
</html>