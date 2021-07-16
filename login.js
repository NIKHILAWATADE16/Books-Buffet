

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBD2C6osofCmCfNRI6RoYXmna8w4lGtMf8",
    authDomain: "books-buffet-97583.firebaseapp.com",
    projectId: "books-buffet-97583",
    storageBucket: "books-buffet-97583.appspot.com",
    messagingSenderId: "231490329265",
    appId: "1:231490329265:web:a31ba769d65dc9d96da090",
    measurementId: "G-XZMQXE20YB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("page_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if (user != null) {
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        // document.getElementById("page_div").style.display = "block";
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("page_div").style.display = "block";
  
    }
  });


    function signUp() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");
    
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      //alert("Sign Up sucessfull")
       
    }
    
    function signIn() {
    
      var email = document.getElementById("email");
      var password = document.getElementById("password");
    
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
    }

    function logout() {
      firebase.auth().signOut();
    }
    
