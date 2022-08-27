refreshTable();



$("#formAddData").submit(function(event){
    event.preventDefault();
	    let file_data = $('#photoUpload').prop('files')[0];
	    let form_data = new FormData();
        let form = document.querySelectorAll(".inputAddNew");
	    form_data.append('file', file_data);
        form.forEach(function(event){
            form_data.append(event.name, event.value);
        })
	    //alert(file_data);

    
    $.ajax({
        type: "POST",
        url: "add.php",
        data: form_data,
        processData: false,
        contentType: false,
        cache: false,
                   
            
            mimeType: 'multipart/form-data',

        success: function(data){
            document.getElementById("viewTable").innerText = data;
        }
    });
    refreshTable();
})

function refreshTable(){

    //console.log($("input[name='first_name']").text())  
    $.ajax({
        type: "POST",
        url: "getData.php",
        processData: false,
        contentType: false,
        cache: false,
        success: function(data){
            let table = document.getElementById("viewTableTable");
            table.innerHTML = '<tr><th>ИИН</th><th>Фамилия</th<th>Имя</th> <th>Отчество</th> </tr>';
            let dataArray = eval(data)
            
            dataArray.forEach(function(event){
                let tableRow = document.createElement("tr");
                id = document.createElement("td");
                last_name = document.createElement("td");
                first_name = document.createElement("td");
                middle_name = document.createElement("td");
                img = document.createElement('img');
                img.src = event.img;
                img.style.height = '50px';
                id.innerText = event.id;
                last_name.innerText = event.last_name;
                first_name.innerText = event.first_name;
                middle_name.innerText = event.middle_name;
               
                tableRow.appendChild(id);
                tableRow.appendChild(last_name);
                tableRow.appendChild(first_name);
                tableRow.appendChild(middle_name);
                tableRow.appendChild(img);
                table.appendChild(tableRow);
              
            })
            //img = document.createElement('img');
            //img.src = data;
            //document.getElementById("viewTable").appendChild(img);
        }, 
        error: function(){
            alert('Такой ИИН уже существует')
        }
    })
}