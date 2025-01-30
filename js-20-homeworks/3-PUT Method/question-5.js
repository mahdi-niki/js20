//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

const user = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phone: "(945) 635-3854",
  };

async function partyBazi(id,users) {
    try {
      
        const resp = await fetch(
          `https://6794f356aad755a134ead473.mockapi.io/user/${id}`,
          {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(users),
          }
        );
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const data = await resp.json();
        console.log(data);
      
    } catch (error) {
      console.log(error);
  
    
    }
}

  partyBazi(1,user);


//*To be continue...