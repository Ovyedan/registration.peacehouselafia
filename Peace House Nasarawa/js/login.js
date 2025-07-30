document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const storedData = JSON.parse(localStorage.getItem(userId));
  
    if (storedData && storedData.password === password) {
      localStorage.setItem("currentUser", userId);
      window.location.href = "../html/portal.html";
    } else {
      alert("Invalid User ID or Password");
    }
  });
  