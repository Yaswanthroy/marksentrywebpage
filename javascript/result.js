var name = localStorage.getItem("name");
var rollno = localStorage.getItem("rollno"); 
var result = JSON.parse(localStorage.getItem("output"));
document.getElementById("n").innerHTML = "Name : "+name;
document.getElementById("roll").innerHTML = "Roll.No : "+rollno;
for(let i=0;i<result.length;i++){
    document.getElementById(i).innerHTML = result[i];
}
localStorage.clear();