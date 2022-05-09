// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA5RcQFQp6F6LHpcjWV4PPxjXbABMQtDE0",
    authDomain: "contact-us-10693.firebaseapp.com",
    projectId: "contact-us-10693",
    databaseURL: "https://contact-us-10693-default-rtdb.firebaseio.com/",
    storageBucket: "contact-us-10693.appspot.com",
    messagingSenderId: "345735604271",
    appId: "1:345735604271:web:439fd687b588f43d55beda"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var name = document.getElementById("name").value; 
  var email = document.getElementById("email").value; 
  var comment = document.getElementById("comment").value; 
  
  detailsRef.push().set({ 
    name: name, 
    email: email, 
    comment: comment, 
  }); 
   
 
} 