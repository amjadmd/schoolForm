
         
function validation() 
{
    var name=document.form1.name;
    var DOB=document.form1.DOB;
    var qualification=document.form1.qualification;
    var location=document.form1.location;
    var T_skill=document.form1.T_skill;
    var I_skill=document.form1.I_skill;
    var mobile=document.form1.mobile;
    var email=document.form1.email;
    var strength=document.form1.strength;
    var hobbies=document.form1.hobbies;
    if(name.value.length<2)
    { 
       alert("Name should be more than 2 characters");
       name.focus();
        return false;
        
    }
    else if(DOB.value.length==0)
    {
        alert("Enter date of birth");
        DOB.focus();
        return false;
    }
    else if(qualification.value.length<=0)
    {
        alert("Enter Qualification");
        qualification.focus();
        return false;
    }
    else if(location.value.length<=0)
    {
        alert("Enter location");
        location.focus();
        return false;
    }
    else if(T_skill.value.length<=0)
    {
        alert("Enter Technical skill");
        T_skill.focus();
        return false;
    }
    else if(I_skill.value.length==0)
    {
        alert("Enter Interpersonal skill ");
        I_skill.focus();
        return false;
    }
    else if(mobile.value.length<10)
    {
        alert("Enter Mobile No ");
        mobile.focus();
        return false;
    }
    else if(email.value.length==0)
    {
        alert("Enter Email ");
        email.focus();
        return false;
    }
    else if(strength.value.length==0)
    {
        alert("Enter your strengths ");
        strength.focus();
        return false;
    }
    else if(hobbies.value.length==0)
    {
        alert("Enter your Hobbies");
        hobbies.focus();
        return false;
    }
    else{
        
        return true;
    }
   
    return false;
}