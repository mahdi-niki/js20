/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
article.style.display = "flex";
article.style.gap="20px"

// ! Answer
async function user() {
  try {
    const idk = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await idk.json();
    card(data);
  } catch {
    console.log("error");
  }
}

function card(user) {
  user.forEach((user) => {
    const div = document.createElement("div");
    div.innerText = `name ${user.name} company name ${user.company.name}`;
    div.style.width = "100px";
    div.style.height = "130px";
    div.style.fontSize="1rem"
    div.style.backgroundColor = "rgb(214, 138, 128)";
    div.style.border="solid 1.5px"
    article.append(div);
  });
}

user();
