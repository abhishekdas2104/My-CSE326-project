
function login (){
    let username = document.getElementById("username").value;
    let password1 = document.getElementById("password").value;

    let website_username="cse326@gmail.com";
    let website_password="12345";

    if( username == website_username && password1 == website_password){
        window.location = "Homepage.html"
    }

}