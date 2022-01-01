
// create element & render 
function renderUserProfile(doc){
        document.getElementById('userName').innerHTML = doc.data().name;
        document.getElementById('inpName').value = doc.data().name;
        document.getElementById('userEmail').innerHTML  = doc.data().email;
        document.getElementById('userTextemail').value  = doc.data().email;
        document.getElementById('userBirthDay').value  = doc.data().born;
        document.getElementById('userAddress').value  = doc.data().address;
       }

     console.log("Started DB load");
     console.log(localStorage.getItem("email"));
     // getting data
     db.collection('Users').where('email', '==',localStorage.getItem("email")).get().then((snapshot) => {
         snapshot.docs.forEach(doc => {
             renderUserProfile(doc);
         });
     });
    