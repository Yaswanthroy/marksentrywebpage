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
    var c=parseInt(val.value);
    if (check=='a' || check =='b'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='c' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
  }
    else if(check=='d'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub1+=Math.round(c);
    document.getElementById("sub1").innerHTML = sub1;
  }
  function myFunction2(val,check) {
    var c=parseInt(val.value);
    if (check=='e' || check =='f'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='g' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
    }
    else if(check=='h'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub2+=Math.round(c);
    document.getElementById("sub2").innerHTML = sub2;
  }
  function myFunction3(val,check) {
    var c=parseInt(val.value);
    if (check=='i' || check =='j'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='k' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
    }
    else if(check=='l'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub3+=Math.round(c);
    document.getElementById("sub3").innerHTML = sub3;
  }
  function myFunction4(val,check) {
    var c=parseInt(val.value);
    if (check=='m' || check =='n'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='o' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
    }
    else if(check=='p'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub4+=Math.round(c);
    document.getElementById("sub4").innerHTML = sub4;
  }
  function myFunction5(val,check) {
    var c=parseInt(val.value);
    if (check=='q' || check =='r'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='s' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
    }
    else if(check=='t'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub5+=Math.round(c);
    document.getElementById("sub5").innerHTML = sub5;
  }
  function myFunction6(val,check) {
    var c=parseInt(val.value);
    if (check=='u' || check =='v'){
      c*=0.3;
      if(c>15){
        document.getElementById(check).value="";
        alert("Should be less than 50");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    else if(check=='w' && c>20){
      document.getElementById(check).value="";
      alert("Should be less than 20");c=0;
    }
    else if(check=='x'){
      c*=0.5;
      if(c>50){
        document.getElementById(check).value="";
        alert("Should be less than 100");
        pass;
      }else{
      document.getElementById(check).value=c;}
  }
    sub6+=Math.round(c);
    document.getElementById("sub6").innerHTML = sub6;
  }
  function gracemarks(val) {
    grace=val.value;
    if(parseInt(grace)>20){
      document.getElementById('y').value="";
      alert("Should be less than 20");
    }
    else{
    localStorage.setItem("grace", parseInt(grace));
    total.push(sub1,sub2,sub3,sub4,sub5,sub6);
    total[total.indexOf(Math.min.apply(Math, total))]+=parseInt(grace);
    localStorage.setItem("output", JSON.stringify(total));
    }
  }
  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 39:
          if(grace!=0){
          location.href = "result.html";}
            break;
    }
});