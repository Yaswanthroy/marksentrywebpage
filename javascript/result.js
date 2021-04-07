var name = localStorage.getItem("name");
var rollno = localStorage.getItem("rollno"); 
var gracemarks = localStorage.getItem("grace"); 
var result = JSON.parse(localStorage.getItem("output"));
document.getElementById("n").innerHTML = "Name : "+name;
document.getElementById("roll").innerHTML = "Roll.No : "+rollno;
document.getElementById("marks").innerHTML = "Grace Marks : "+gracemarks;
for(let i=0;i<result.length;i++){
    document.getElementById(i).innerHTML = result[i];
}
localStorage.clear();