var userName= document.getElementById("userName");
var newEmail=document.getElementById("newEmail");
var newPassword=document.getElementById("newPassword");
var profileBody=document.getElementById("profileBody");

if(localStorage.getItem("Users")==null){
    allUsers=[];
}
else{
allUsers = JSON.parse(localStorage.getItem("Users"));
}

function addUser(){
    var flag = false;
    var comment=``;
    var user={
        name:userName.value,
        email:newEmail.value,
        password:newPassword.value,
    }
    for( var i=0 ; i<allUsers.length ; i++){
        if (user.email == allUsers[i].email){
            flag=true;
            break;
        }
    }
    
    if(flag){
        comment=`<p style="color:red;"> This email is already exist ! </p>`;
        document.getElementById("comment").innerHTML=comment;}
    else if (userName.value== "" || newEmail.value== "" || newPassword.value== ""){
        comment=`<p style="color:red;"> All inputs are required ! </p>`;
        document.getElementById("comment").innerHTML=comment;}
    else{
    allUsers.push(user);
    localStorage.setItem ("Users" , JSON.stringify(allUsers));
    comment=`<p style="color:green;"> Success </p>`
    document.getElementById("comment").innerHTML=comment;
    clearForm();}    
}


function hideLogin(){
    var element1=``;
    element1=`<p hidden></p>`;
    document.getElementById("userComment").innerHTML=element1;
}
function hideSign(){
    var element=``;
    element=`<p hidden></p>`;
    document.getElementById("comment").innerHTML=element;
}
function clearForm(){
    userName.value=null;
    newEmail.value=null;
    newPassword.value=null;
}
function Login(){
    var userEmail=document.getElementById("userEmail");
    var userPassword=document.getElementById("userPassword");
    var flag2=false;
    var comment=``;
    var i;
    for(i=0 ; i<allUsers.length ; i++){
        if (userEmail.value==allUsers[i].email && userPassword.value==allUsers[i].password){
            flag2=true;
            break;}
    }
    if(flag2){
        comment=`<p style="color:green;"> Correct e-mail and password , Welcome `+allUsers[i].name+` </p>`;
        localStorage.setItem("userName" , allUsers[i].name );
        document.getElementById("userComment").innerHTML=comment;
        window.location.replace("profile.html");
    }
    else if (userEmail.value== "" || userPassword.value== ""){
        comment=`<p style="color:red;"> All inputs are required ! </p>`;
        document.getElementById("userComment").innerHTML=comment;}
    else{
        comment=`<p style="color:red;">Incorrect e-mail or password ! </p>`;
        document.getElementById("userComment").innerHTML=comment;
    }
    
}

function profilePage(){ 
        var userLocalStorage=localStorage.getItem("userName");
        var userDetails=``;
        userDetails=`<h1 class="mt-5 pt-5"> Welcome `+userLocalStorage+`</h1>`;
        document.getElementById("userMessage").innerHTML=userDetails;
}

function logout(){
    localStorage.removeItem("userName");
}
