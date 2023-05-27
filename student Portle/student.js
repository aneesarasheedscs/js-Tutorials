var studentData = [
    {firstname:"Abdul", lastname: "Hadi", age: 27, class: "MBA", country:"Pakistan"},
    {firstname:"Ali", lastname: "Usman", age: 24, class: "MSc", country:"Pakistan"}
];
function displayTableData(){
    //creating a table here
    let html = "<table border='1|1' class='table'>";
    setTimeout(() => {
        html+="<thead>";
        html+="<tr>";
        html+="<td colspan='2'>"+'Id.'+"</td>";
        html+="<td>"+'FirstName'+"</td>";
        html+="<td>"+'LastName'+"</td>";
        html+="<td>"+'Age'+"</td>";
        html+="<td>"+'Class'+"</td>";
        html+="<td>"+'Country'+"</td>";
        html+="<td>"+'Action'+"</td>";
        html+="</tr>";
        html+="</thead>";
        for(var i =0; i < studentData.length; i++) {
            var id= i+1;
            // loop to get values from  student array
            html+="<tr>";
            html+="<td colspan='1'>"+ id +"<td>";
            html+="<td>"+studentData[i].firstname+"</td>";
            html+="<td>"+studentData[i].lastname+"</td>";
            html+="<td>"+studentData[i].age+"</td>";
            html+="<td>"+studentData[i].class+"</td>";
            html+="<td>"+studentData[i].country+"</td>";
            html+="<td>"+`<button type="button" onclick='removeItem(${studentData[i].id})'>remove<i class="fa fa-trash"  style="font-size:38px;"></i></button>
            <button type="button" onclick="editUser()">edit<i class="fa fa-edit" style="font-size:40px"; "margin-bottom:0";></i></button>` + "</td>";
            html+="</tr>";

        } 
        //append the table in the html table id
        html+="</table>";
        document.getElementById("table").innerHTML=html;
    }, 200);
}
displayTableData();

function addonClick(){
    //getting values from input fields
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var classe = document.getElementById('class').value;
    var country = document.getElementById('country').value;
           //pushing new student in the student array
    if(firstname && lastname && age && classe && country){
        let id= studentData.length+1;
        studentData.push({firstname:firstname,lastname:lastname ,age:age, class:classe, country:country, id:id})
        displayTableData();
        clearItems();
    }
}
//clear funtion clears the input fields after the student is pushed 
function clearItems(){
         document.getElementById('firstName').value ="";
         document.getElementById('lastName').value ="";
         document.getElementById('age').value="";
          document.getElementById('class').value ="";
          document.getElementById('country').value ="";
}
//here we can see the record of the table when the student is removed
function removeItem(record){
    console.log(record);
    var filter = studentData.filter((a,i)=>{//here is the record on which we are looping
         if(record == a.id){
            studentData.splice(i,1);
               displayTableData();
         }
    });
    console.log(studentData);

}
//  function for edit user name
function editUser(){
  
}