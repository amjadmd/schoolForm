function validation() {
    var a=document.getElementById("nam").value;
    var correct1=/^[a-zA-Z ]+$/;
    var b=document.getElementById("dob").value;
    var c=document.getElementById("qual").value;
    var correct3=/^[a-zA-Z ,-.]+$/;
    var d=document.getElementById("loc").value;
    var correct4=/^[a-zA-Z ,-./0-9]+$/;
    var e=document.getElementById("tskill").value;
    var correct5=/^[a-zA-Z ,/-]+$/;
    var f=document.getElementById("iskill").value;
    var correct6=/^[a-zA-Z ,/-]+$/;
    var g=document.getElementById("pho").value;
    var h=document.getElementById("email").value;
    var correct8=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+[a-zA-Z]{2,4}$/;
    var i=document.getElementById("str").value;
    var correct9=/^[a-zA-Z ,/-]+$/;
    var j=document.getElementById("hobb").value;
    var correct10=/^[a-zA-Z ,/-]+$/;
    if(a == ""){
        
        alert("Name field is empty");
       name.focus();
        return false;
         }   
    if(a.length<=2){
           
            alert("Name should be more than 2 characters");
            name.focus();
            return false;
            }
    if(!(a.match(correct1))){
                    
                    alert("Enter only alphabets");
                    return false;
                    name.focus();
                }
    if(b==""){
         alert("Enter Date of Birth");
        return false;
    }
    if(c==""){
         alert("Enter Qualification");
        return false;
    }
    if(!(c.match(correct3))){
           alert("Enter valid qualification");
                    return false;
                     qualification.focus();
                }
    if(d==""){
         alert("Enter location");
        return false;
    }
    if(!(d.match(correct4))){
           alert("Enter valid location");
                    return false;
                     location.focus();
                }
    if(e==""){
         alert("Enter Technical skill");
        return false;
    }
    if(!(e.match(correct5))){
           alert("Enter valid Technical skills");
                    return false;
                     T_skill.focus();
                }
    if(f==""){
        alert("Enter Interpersonal skill ");
        return false;
    }
    if(!(f.match(correct6))){
           alert("Enter valid Interpersonal skill");
                    return false;
                     I_skill.focus();
                }
    if(g==""){
         alert("Enter Mobile No ");
        return false;
    }
    if(g.length<10){
         alert("Enter Valid Mobile No ");
        return false;
    }
    
    if(h==""){
        alert("Enter Email ");
        return false;
    }
    if(!(h.match(correct8))){
           alert("Enter valid Email");
                    return false;
                     email.focus();
                }
    if(i==""){
         alert("Enter your strengths ");
        return false;
    }
    if(!(i.match(correct9))){
           alert("Enter valid Characters in your strength");
                    return false;
                     strength.focus();
                }
    if(j==""){
          alert("Enter your Hobbies");
        return false;
    }
    if(!(j.match(correct10))){
           alert("Enter valid Characters in your Hobbies");
                    return false;
                     hobbies.focus();
                }
    }
    