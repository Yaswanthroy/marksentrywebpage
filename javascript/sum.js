var name="";rollno="";grace=0;total=[]; sub1=0;var sub2=0;var sub3=0;sub4=0;sub5=0;sub6=0;
function variable(val) {
    name=val.value;
    localStorage.setItem("name", name);
  }
  function variable1(val) {
    rollno=val.value;
    localStorage.setItem("rollno", rollno);
  }
function myFunction1(val,check) {
    var c=val.value;
    if ((check=='a' || check =='b') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='c' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='d' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub1+=parseInt(c);
      document.getElementById("sub1").innerHTML = sub1;
      }
  }
  function myFunction2(val,check) {
    var c=val.value;
    if ((check=='e' || check =='f') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='g' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='h' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub2+=parseInt(c);
      document.getElementById("sub2").innerHTML = sub2;
    }
  }
  function myFunction3(val,check) {
    var c=val.value;
    if ((check=='i' || check =='j') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='k' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='l' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub3+=parseInt(c);
      document.getElementById("sub3").innerHTML = sub3;
    }
  }
  function myFunction4(val,check) {
    var c=val.value;
    if ((check=='m' || check =='n') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='o' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='p' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub4+=parseInt(c);
      document.getElementById("sub4").innerHTML = sub4;
    }
  }
  function myFunction5(val,check) {
    var c=val.value;
    if ((check=='q' || check =='r') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='s' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='t' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub5+=parseInt(c);
      document.getElementById("sub5").innerHTML = sub5;
    }
  }
  function myFunction6(val,check) {
    var c=val.value;
    if ((check=='u' || check =='v') && parseInt(c)>15){
      document.getElementById(check).value="";
      alert("Should be less than 15");
    }
    else if(check=='w' && parseInt(c)>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");
    }
    else if(check=='x' && parseInt(c)>50){
      document.getElementById(check).value="";
      alert("Should be less than 50");
    }
    else{
      sub6+=parseInt(c);
      document.getElementById("sub6").innerHTML = sub6;
    }
  }
  function gracemarks(val) {
    grace=val.value;
    if(parseInt(grace)>20){
      document.getElementById('y').value="";
      alert("Should be less than 20");
    }
    else{
    total.push(sub1,sub2,sub3,sub4,sub5,sub6);
    total[total.indexOf(Math.min.apply(Math, total))]+=parseInt(grace);
    localStorage.setItem("output", JSON.stringify(total));
    }
  }