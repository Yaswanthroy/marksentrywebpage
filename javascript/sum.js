var name="";rollno="";grace=0;total=[]; sub1=0;var sub2=0;var sub3=0;sub4=0;sub5=0;sub6=0;
function variable(val) {
    name=val.value;
  }
  function variable1(val) {
    rollno=val.value;
  }
function myFunction1(val) {
    var c=val.value;
    sub1+=parseInt(c);
    document.getElementById("sub1").innerHTML = sub1;
  }
  function myFunction2(val) {
    var c=val.value;
    sub2+=parseInt(c);
    document.getElementById("sub2").innerHTML = sub2;
  }
  function myFunction3(val) {
    var c=val.value;
    sub3+=parseInt(c);
    document.getElementById("sub3").innerHTML = sub3;
  }
  function myFunction4(val) {
    var c=val.value;
    sub4+=parseInt(c);
    document.getElementById("sub4").innerHTML = sub4;
  }
  function myFunction5(val) {
    var c=val.value;
    sub5+=parseInt(c);
    document.getElementById("sub5").innerHTML = sub5;
  }
  function myFunction6(val) {
    var c=val.value;
    sub6+=parseInt(c);
    document.getElementById("sub6").innerHTML = sub6;
  }
  function gracemarks(val) {
    grace=val.value;
total.push(sub1,sub2,sub3,sub4,sub5,sub6);
total[total.indexOf(Math.min.apply(Math, total))]+=parseInt(grace);
  }