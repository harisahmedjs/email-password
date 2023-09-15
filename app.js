const email = document.getElementById("email");
const password = document.getElementById("password");
const result = document.getElementById("result")



const arry = [];

function render() {
    result.innerHTML = ''
   const user = {
        Email: email.value,
        Password: password.value
    }
    arry.push(user)

    email.value = ""
    password.value = ""
    for (let i = 0; i < arry.length; i++) {
        // console.log(arry[i]);
        result.innerHTML += `<p>Email: ${arry[i].Email}</p>
 <p>Password:${arry[i].Password}</p>
 <button onclick="edited(${i})">Edit</button>
 <button onclick="remove(${i})">Delete</button>
 `
      
    }
}
function addTODO(e) {
    if(email.value === ""){
        alert('Enter Email Password')
    }else{
        e.preventDefault()
    render()
    }
    
}




function edited(index) {

result.innerHTML = ''

const changeEmail = prompt("Change Emial",arry[index].Email)
const changePassword = prompt("Change Password",arry[index].Password)
arry[index].Email=changeEmail;
arry[index].Password=changePassword;
for (let i = 0; i < arry.length; i++) {
    // console.log(arry[i]);
    result.innerHTML += `<p>Email: ${arry[i].Email}</p>
<p>Password:${arry[i].Password}</p>
<button onclick="edit(${i})">Edit</button>
<button onclick="remove(${i})">Delete</button>
`
}

}

function remove(index){
    
result.innerHTML = ''

    arry.splice(index,1)
    for (let i = 0; i < arry.length; i++) {
        
        result.innerHTML += `<p>Email: ${arry[i].Email}</p>
    <p>Password:${arry[i].Password}</p>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="remove(${i})">Delete</button>
    `
    }


}
