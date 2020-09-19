let employeeDetails = [
    {
        name : "Sachin",
        age  : 21,
        salary  : 50000,
        city : "New Delhi"
    },
    {
        name : "Sashank",
        age  : 21,
        salary  : 45000,
        city : "New Delhi"
    },
    {
        name:"Nishant",
        age :20,
        city:"Ghaziabad",
        salary: 50000
       },
    {
        name : "lalita",
        age  : 21,
        salary  : 47000,
        city : "New Delhi"
    }
];

function display(superarray){
let tabledata = "";
     superarray.forEach(function(data, index){
     let currentrow =
     `<tr>
      <td>${index+1}</td>
      <td>${data.name}</td>
      <td>${data.age}</td>
      <td>${data.salary}</td>
      <td>${data.city}</td>
      <td><button onclick="deleteEmployee(${index})">delete</button></td>
      </tr>`

      tabledata+= currentrow;
});
document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
        
}

display(employeeDetails);

function addEmployee(event){
    event.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let city = document.getElementById("city").value;

    employee.name = name;
    employee.age = Number(age);
    employee.salary = Number(salary);
    employee.city = city;
    employeeDetails.push(employee)

    display(employeeDetails);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
}


function searchbyname(){
    let searchvalue =  document.getElementById("searchname").value;
    let newdata = employeeDetails.filter(function(employee){
    return employee.name.toUpperCase().indexOf(searchvalue.toUpperCase())!= -1;
    });
    console.log(newdata);
    display(newdata);
}

function deleteEmployee(index){
    employeeDetails.splice(index, 1);
    display(employeeDetails);
}