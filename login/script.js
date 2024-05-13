
// let all =[{
    
// }]

let i =0 ;
let usernames = []
let numbers = []
let passwords = []
let emails = []

    // all[i]["password"] = pass;
    // all[i]["number"] = num;
    // all[i]["email"] = emai;
    // console.log(all[i][username])
    // console.log(all[i][password])
    // console.log(all[i][email])
    // console.log(all[i][number])
    //console.log(un + pass + num + emai)
   let un,pass,num,emai;
function registered(){
    alert("REGISTERED SUCCESFULLY");
 un = document.getElementById("username").value
     pass = document.getElementById("password").value
     num = document.getElementById("number").value
     emai = document.getElementById("email").value
    usernames.push(un)
    numbers.push(num)
    emails.push(emai)
    passwords.push(pass)
    console.log(usernames)
    console.log(passwords)
    console.log(numbers)
    console.log(emails)
    
    // all[i]["username"] = un;
  
   
}
console.log(un)
    console.log(num)
    console.log(emai)
 console.log(pass)
    
  function doo(){
   
        document.getElementById("login").href="C:/Users/azimk/OneDrive/Desktop/frontend/projects/flipkart basic/index.html"
  }
function already(){
    alert("REDIRECTING TO LOGIN PAGE....")
}

