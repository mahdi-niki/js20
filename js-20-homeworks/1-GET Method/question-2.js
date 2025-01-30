/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
async function idk() {
  
  try{
    const idk = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await idk.json()
    console.log(data)
  }catch{
    console.log("erorr")
  }
}

idk()
