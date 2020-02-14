let users = [
    {id: 'admin', password: 'admin', role: 'admin'},
    {id: 'user', password: 'user', role: 'user'}
]

function login(){
    if(document.getElementById("userName").value === users[0].id && document.getElementById("password").value === users[0].password){

    }
    else if(document.getElementById("userName").value === users[1].id && document.getElementById("password").value === users[1].password){

    }
    else {document.getElementById("salahPass").innerHTML = `<h2>Username/Password anda salah.</h2>`}
}