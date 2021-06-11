
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHV1ySF4RUuuZ9HDHtnOkL2U9GcaNxTbw",
      authDomain: "kwitter-bc521.firebaseapp.com",
      databaseURL: "https://kwitter-bc521-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc521",
      storageBucket: "kwitter-bc521.appspot.com",
      messagingSenderId: "13391314855",
      appId: "1:13391314855:web:76a02d13f413a247290082",
      measurementId: "G-RX6K6Y2K7J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name : " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name " ,name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}