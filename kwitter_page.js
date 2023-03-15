//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBjPZTAeYV5vVFdFAb-tOOC_Sqc6fBnHHU",
      authDomain: "hashtagz-86db0.firebaseapp.com",
      databaseURL: "https://hashtagz-86db0-default-rtdb.firebaseio.com",
      projectId: "hashtagz-86db0",
      storageBucket: "hashtagz-86db0.appspot.com",
      messagingSenderId: "12377927578",
      appId: "1:12377927578:web:fe152c0355e4b36fa5d423"
    };
    
    // Initialize Firebase //hi//hi//hi//hi//how is your day // i like // slashes//its good//hi//bye
  firebase.initializeApp(firebaseConfig); //hi
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");//eee
  //eeeeeeeeeeeeeeee
  function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:  user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//oke //alright （￣︶￣）↗　
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like=message_data['like'];//yes
name_with_tag="<h4> "+name+"<img src='tick.png' class='user_tick' > </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button id="+firebase_message_id+"class='btn btn-warning' value="+like+" onclick='updatelike(this.id)' >";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
roweISokay=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=roweIsokay;

//End code
      } });  }); }
getData();


function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(like)+1;
      console.log("your thing has "+ updated_likes+"!");
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes


      });
}
function logOut() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      //eee
      window.location="index.html";
      console.log("YOU HAVE LOGGED OUT")
}