<h4>Структрура таблицы</h4>
<pre>+--------------+------------------+------+-----+---------+-------+
| Field        | Type             | Null | Key | Default | Extra |
+--------------+------------------+------+-----+---------+-------+
| id           | int(20) unsigned | NO   | PRI | NULL    |       |
| first_name   | varchar(40)      | YES  |     | NULL    |       |
| middle_name  | varchar(40)      | YES  |     | NULL    |       |
| last_name    | varchar(40)      | YES  |     | NULL    |       |
| date         | date             | YES  |     | NULL    |       |
| phone_number | varchar(20)      | YES  |     | NULL    |       |
| address      | varchar(40)      | YES  |     | NULL    |       |
| photo        | blob             | YES  |     | NULL    |       |
| photo_prop   | varchar(20)      | YES  |     | NULL    |       |
+--------------+------------------+------+-----+---------+-------+
</pre>



<h4>Создание таблицы</h4>
create database sobes;
create table people( id INT UNSIGNED UNIQUE, first_name VARCHAR(40), middle_name VARCHAR(40), last_name VARCHAR(40), date DATE, phone_number VARCHAR(20), address VARCHAR(40), photo BLOB, photo_prop VARCHAR(20), CONSTRAINT pk_people PRIMARY KEY(id));
grant all privileges on sobes.* to testuser@'localhost' identified by 'testpassword';
flush privileges;
