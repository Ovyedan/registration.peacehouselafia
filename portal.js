window.addEventListener("load", function() {
    const currentUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(currentUser));
  
    if (userData) {
      document.getElementById("portalName").innerText = userData.name;
      document.getElementById("portalSurname").innerText = userData.surname
      document.getElementById("portalUserId").innerText = userData.uniqueId;
      document.getElementById("portalUserId").innerText = userData.uniqueId;
    } else {
      window.location.href = "../html/login.html";
    }
  });
  
  function registerForEvent() {
    alert("You have successfully registered for a new event!");
  }

  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }

  function program1() {
    window.location.href = "cyc.html"
  }
  function rightContent() {
    const rightContent= document.getElementById("right-content");
    rightContent.style.display= "block"

  }
 
  