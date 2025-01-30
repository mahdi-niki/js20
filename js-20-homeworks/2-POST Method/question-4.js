// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */

async function partyBazi(users) {
  try {
    for (const user of users) {
      const resp = await fetch(
        "https://6794f356aad755a134ead473.mockapi.io/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      const data = await resp.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);

  }
}

partyBazi(users);


//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const fname = document.querySelector("#fName");
const lname = document.querySelector("#lName");
const form = document.querySelector(".idk");
const phone = document.querySelector("#phone");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    firstName: fname.value,
    lastName: lname.value,
    phone: phone.value,
  };
  partyBazi([user]);
});

//*To be continue...
