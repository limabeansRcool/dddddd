
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBjPZTAeYV5vVFdFAb-tOOC_Sqc6fBnHHU",
      authDomain: "hashtagz-86db0.firebaseapp.com",
      databaseURL: "https://hashtagz-86db0-default-rtdb.firebaseio.com",
      projectId: "hashtagz-86db0",
      storageBucket: "hashtagz-86db0.appspot.com",
      messagingSenderId: "12377927578",
      appId: "1:12377927578:web:fe152c0355e4b36fa5d423"
    };//everything be BORING BIORHROYTIH:ORUIHEO:ITHELKJDLKF NOOOO BORING NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ₯*^____^*（￣︶￣）↗　（￣︶￣）↗　（￣︶￣）↗　（￣︶￣）↗　（￣︶￣）↗　
    
    // Initialize Firebase //hi//hi//hi//hi//how is your day // i like // slashes//its good//hi//bye
  firebase.initializeApp(firebaseConfig); //hi
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome fellow alien, " + user_name + "!!! hope u have a martian time here";
function addroom(){
  room_name= document.getElementById("r00m_n@me").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding_room_name.WELCOMEALLMARTIANS"
  });
  localStorage.setItem("room_name",room_name);//
  window.location= "kwitter_page.html";
  //kwwwwapoeisyrashdlfnk3q082365yotgukajbhnsdfkljgofgoeyuaighkbjlope9088iouhgbjansmd,vkeotihalkndaoipeaqilhjbfoa
  //ready martians
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
//ok //i understand im ONLY going to talk in comments ok
console.log("room_name= " + Room_names);
//ok done
//:)
rowe="<div class= 'room_name' id="+ Room_names+" onclick='redirectRoomName(this.id)'>#"+Room_names+"</div> <hr> ";//ok
//im here hahaha it will always bee "rowe"
//ok alright !
document.getElementById("output").innerHTML+=rowe;

   //,,, //commas   //End code
      });});}
getData(); //#THIS FIREBASE THING is ANIMAL SPIECES AS MEAT RACIST. IT DOESNT ACCEPT MY THING OF HAM!!!! >:(
function redirectRoomName(name)
{//ok
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";

}
function logout(){
  localStorage.removeItem("user_name");
  //ok
  localStorage.removeItem("room_name");
  window.location = "index.html";
  //ahahahaha all your progress wil be lost if u click LOGOUT so dont.o NEVER unless your a human we dont like humans we only like specified classified confidential green martians.
}


