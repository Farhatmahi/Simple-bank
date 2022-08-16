//step 1: create event listeners on button click

document.getElementById("btn-submit").addEventListener("click", () => {
      //step 2: get the email address inside the input field
      const email = document.getElementById("user-email").value;
      const password = document.getElementById("user-password").value;
      if(email == "you@yourdad.com" && password == "daddysbank"){
            console.log("valid user");
            window.location.href = "bank.html"
      }
      else{
            alert("You forgot your password??? YOU ARE NO LONGER MY SON ANYMORE!")
      }
})

