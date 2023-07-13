function submit(){
    //email input
let email= document.getElementById('email').value
// emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
emailpattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
if (email ==""){
document.getElementById("emailerror").innerHTML = "**Email can't be empty**";
}
else if (!emailpattern){
    document.getElementById("emailerror").innerHTML="**Enter a valid Email**";
}

else{
    document.getElementById("emailerror").innerHTML = "";
}


//password
let password= document.getElementById('password').value;
passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)

if(password==""){
    document.getElementById("passerror").innerHTML="**password cannot be empty**"
}

else if(!passwordpattern){
    document.getElementById("passerror").innerHTML="**Enter a valid password**"
}

else{
    document.getElementById("passerror").innerHTML=""
}

//con-password
let  conpassword= document.getElementById('conpassword').value;

if(conpassword===""){
    document.getElementById("conerror").innerHTML="**This cannot be empty**"
}
else if(conpassword!==password){
    document.getElementById("conerror").innerHTML="**Password does not match**"
}
else{
    document.getElementById("conerror").innerHTML=""
}

//name
let names= document.getElementById('names').value;
usernamePattern = /^[a-zA-Z ]{4,30}$/.test(names)

if(names== ""){
    document.getElementById("nameError").innerHTML="**Enter a User Name**"
}

else if(!usernamePattern){
document.getElementById("nameError").innerHTML="**Enter a valid user Name**"

}

else{
    document.getElementById("nameError").innerHTML=""
}
//checkbox
let male= document.getElementById('male').checked;
let female= document.getElementById('female').checked;
let others= document.getElementById('others').checked;

if(male||female||others){
    document.getElementById("radioError").innerHTML = "";
}
else {
    document.getElementById("radioError").innerHTML = "**Select the Gender**";
}
//phone Number
let phonenumber= document.getElementById('phonenumber').value
phonepattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phonenumber)

if(phonenumber== ""){
    document.getElementById("phError").innerHTML="**Enter a Phone Number**";
}
else if (!phonepattern) {
    document.getElementById("phError").innerHTML = "**Enter a valid Phone Number**";
}
else {
    document.getElementById("phError").innerHTML = "";
}

//DOB
let dob= document.getElementById('dob').value
if (dob == "") {
    document.getElementById("dob-err").innerHTML = "**This field is required**"
} else {
    document.getElementById("dob-err").innerHTML = ""
}


//Options

let Option= document.getElementById("Option").value;
if (Option === "PleaseSelect") {
    document.getElementById("select-err").innerHTML = "**This field is required**"
} else {
    document.getElementById("select-err").innerHTML = ""
}

//check box
let flexCheck= document.getElementById('flexCheck').checked;

if (!flexCheck){
    document.getElementById("check-err").innerHTML="**Please agree the terms and conditions**"
}
else{
    document.getElementById("check-err").innerHTML=""
}
}

