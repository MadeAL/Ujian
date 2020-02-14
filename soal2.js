let users = [
    {id: 'admin', password: 'admin', role: 'admin'},
    {id: 'user', password: 'user', role: 'user'}
]

let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
let nomor = [1,2]

function login(){
    if(document.getElementById("userName").value === users[0].id && document.getElementById("password").value === users[0].password){
        document.getElementById("hasilTabel").innerHTML=
        (
        `
            <tr>
                <td>1</td>
                <td>Lari</td>
                <td>Senin</td>
                <td> <img src="C:\Users\Made adi Laksmana\Desktop\Purwadhika\Ujian Purwadhika\Capture.JPG" alt="Lari" width="50" height="50"> </td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Estafet</td>
                <td>Selasa</td>
                <td> <img src="C:\Users\Made adi Laksmana\Desktop\Purwadhika\Ujian Purwadhika\Capture.JPG" alt="Estafet" width="50" height="50"> </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><select name="" id="categoryInput" onchange=category()"> </select></td>
                <td></td>
                <td></td>
            </tr>
        `
        )
    }
    else if(document.getElementById("userName").value === users[1].id && document.getElementById("password").value === users[1].password){
        document.getElementById("hasilTabel").innerHTML=
                (
                `
                    <tr>
                        <td>1</td>
                        <td>Lari</td>
                        <td>Senin</td>
                        <td> <img src="C:\Users\Made adi Laksmana\Desktop\Purwadhika\Ujian Purwadhika\Capture.JPG" alt="Lari" width="50" height="50"> </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Estafet</td>
                        <td>Selasa</td>
                        <td> <img src="C:\Users\Made adi Laksmana\Desktop\Purwadhika\Ujian Purwadhika\Capture.JPG" alt="Estafet" width="50" height="50"> </td>
                        <td></td>
                    </tr>
                `
                )
        document.getElementById("salahPass").innerHTML = `<h1>${users[1].id}</h1>`
        document.getElementById("salahPass1").innerHTML = (`<input type="button" value="Logout" onclick="logOut()"> `)
    }
    else {document.getElementById("salahPass").innerHTML = `<h2>Username/Password anda salah.</h2>`}
}

function logOut(){
    document.getElementById("hasilTabel").innerHTML = ''
    document.getElementById("salahPass").innerHTML = ''
}

function category(){
    var listOption = hari.map((elem) => {
        return (
            `
                <option value="${elem}">${elem}</option>
            `
        )
    })
    document.getElementById("categoryInput").innerHTML = listOption.join('')
}