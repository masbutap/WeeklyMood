var nama = '';

// testing
// let pw = '123';

let users = []

//testing
// let users = [{ username: 'naruto', password: '123', mood: [0, 0, 0, 0, 0, 0, 0]}, {username: 'sasuke', password: '456', mood: [0, 0, 0, 0, 0, 0, 0]} ]

function createUser(username, password) { //tombol register
   let name = document.getElementById("username");
   let pw = document.getElementById("password");
   let object = {
      username: name,
      password: pw,
      mood: [0, 0, 0, 0, 0, 0, 0] 
   }
   users.push(object);
   return users;
}  // working
// [{ username: 'naruto', password: '123', mood: [0, 0, 0, 0, 0, 0, 0]}, {username: 'sasuke', password: '456', mood: [0, 0, 0, 0, 0, 0, 0]} ]

function login (username, password) { // untuk login di HTML, tombol login
   for (let i = 0; i < users.length; i++) { //loop untuk match username dan pw
      if (username === users[i].username && password === users[i].password) {
         nama = username;
         return users[i].mood;
      }
   }
} // working
// console.log(login('sasuke', '456'));
// console.log(nama);
// [0, 0, 0, 0, 0, 0, 0]

function inputMood(selectorDay, radioMood) { // radio 1-5, HTML hari id="senin"  MAIN FUNCTION
   let index = document.getElementById(selectorDay).value
   let inputMood = document.getElementById(radioMood).value

   //testing
   // let inputMood = radioMood
   // let index = selectorDay

   for (let i = 0; i < users.length; i++) {
      if (nama === users[i].username) {
         users[i].mood[index] = inputMood;
         return users[i].mood;
      }
   }
} //working
// [ 0, 0, 0, 4, 0, 0, 0]

//testing
// console.log(inputMood(3, 4));

/** function login
 *  [ { 'naruto': [3, 3, 4, 5, 2, 1, 3] } ,
 *    { 'sasuke': [1, 2, 1, 2, 2, 1, 3] }
 *  ]
 * 
 * 
 * 
 * 
*/