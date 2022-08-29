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
            table.innerHTML = '<tr><th>ИИН</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Фото</th></tr>';
            let dataArray = eval(data)
            
            dataArray.forEach(function(event){
                let tableRow = document.createElement("tr");
                tableRow.setAttribute('onclick', 'editPerson(this)');
                tableRow.classList.add('tableRow');
                id = document.createElement("td");
                last_name = document.createElement("td");
                first_name = document.createElement("td");
                middle_name = document.createElement("td");
                removeCheckRow = document.createElement("td");
                
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

//let dateOld = 0;

function editPerson(event){
    id = event.children[0].innerText;
    last_name = event.children[1].innerText;
    first_name = event.children[2].innerText;
    middle_name = event.children[3].innerText;
    photo = event.children[4].innerText;
    let form_data = new FormData();
    form_data.append('id', id);

    $.ajax({
        type: "POST",
        url: "getDataPerson.php",
        processData: false,
        contentType: false,
        cache: false,
        data: form_data,
        success: function(data){
            let formHolder = document.getElementById("editPerson");
            let table = document.getElementById("editPersonForm");
            formHolder.style.top = "10vh";
            table.innerHTML = '';
            let dataArray = eval(data)
            //console.log(eval(data));
            dataArray.forEach(function(event){
                id = document.createElement("input");
                last_name = document.createElement("input");
                first_name = document.createElement("input");
                middle_name = document.createElement("input");
                phone_number = document.createElement("input");
                address = document.createElement("input");
                photo = document.createElement("input");
                date = document.createElement("input");
                id.name = "id";
                last_name.name = "last_name";
                first_name.name = "first_name";
                middle_name.name = "middle_name";
                phone_number.name = "phone_number";
                address.name = "address";
                photo.name = "photo";
                date.name = "date";
                img = document.createElement('img');
                img.src = event.img;
                img.style.height = '50px';
                
                date.type = 'date';
                photo.type = 'file';
                photo.id = "changePhoto";
                id.classList.add("addInputChange");
                last_name.classList.add("addInputChange");
                first_name.classList.add("addInputChange");
                middle_name.classList.add("addInputChange");
                phone_number.classList.add("addInputChange");
                address.classList.add("addInputChange");
                photo.classList.add("addInputChange");
                date.classList.add("addInputChange");




                id.value = event.id;
                last_name.value = event.last_name;
                first_name.value = event.first_name;
                middle_name.value = event.middle_name;
                phone_number.value = event.phone_number;
                address.value = event.address;
                date.value = event.date;
                //photo.value = event.img;
                id.value = event.id;

                submitAdd = document.createElement("input");
                submitDel = document.createElement("Button");
                submitAdd.type = "submit";
                submitDel.innerText = "Удалить";
                submitAdd.value = "Изменить";
                submitDel.setAttribute('onclick', 'deletePerson(this)');
                submitDel.style.width = "4rem";
                submitDel.style.display = "block";
                submitAdd.id = "change";
                

                table.appendChild(id);
                table.appendChild(last_name);
                table.appendChild(first_name);
                table.appendChild(middle_name);
                table.appendChild(address);
                table.appendChild(phone_number);
                table.appendChild(date);
                table.appendChild(submitAdd);
                //formHolder.appendChild(submitDel);

                
               
                
              
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

$("#editPersonForm").submit(function(event){
    event.preventDefault();
    
	    let form_data = new FormData();
        let form = document.querySelectorAll(".addInputChange");
        let formHolder = document.getElementById("editPerson");
        formHolder.style.top = "-500vh";
	    
        form.forEach(function(event){
            
            if(event.value != ''){
                form_data.append(event.name, event.value);
            }
            
        })
	    //alert(file_data);

    
    $.ajax({
        type: "POST",
        url: "changeDataPerson.php",
        data: form_data,
        processData: false,
        contentType: false,
        cache: false,
        mimeType: 'multipart/form-data',

        success: function(data){
            console.log(data)
            refreshTable();
        }
    });
    refreshTable();
})


function deletePerson(event){
    let formHolder = document.getElementById("editPerson");
    formHolder.style.top = "-500vh";
    //console.log(event);
    let idToDelete = event.offsetParent.firstElementChild.firstChild.value;
    console.log(idToDelete);
    let form_data = new FormData();
    form_data.append('id', idToDelete);
    $.ajax({
        type: "POST",
        url: "deletePerson.php",
        data: form_data,
        processData: false,
        contentType: false,
        success: function(data){
            console.log(data);
        }
    })
    refreshTable();
}