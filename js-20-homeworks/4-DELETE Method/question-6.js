//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
async function partyBazi(id) {
    try {
      
        const resp = await fetch(
          `https://6794f356aad755a134ead473.mockapi.io/user/${id}`,
          {
            method: "DELETE",
          });
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const data = await resp.json();
        console.log(data);
      
    } catch (error) {
      console.log(error);
  
    
    }
}

  partyBazi(1);
  partyBazi(2)
  partyBazi(3)

//*End of story :)

