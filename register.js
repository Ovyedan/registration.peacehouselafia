document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let counter = 0

    const year = new Date().getFullYear().toString().slice(2);
    const generateId = document.getElementById("LGA").value + year + "-" + document.getElementById("gender").value + Math.floor(Date.now() % 1000);
    counter = (counter ++) % 1000;
    const uniqueId = generateId + counter;
    const title=document.getElementById("title").value;
    const surname= document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const otherNames= document.getElementById("otherNames").value;
    const dob= document.getElementById("dob").value;
    const gender= document.getElementById("gender").value;
    const lga= document.getElementById("LGA").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
    const userName = {
      surname: surname,
      name:name,
      otherNames:otherNames,

    }
    const userData = {
      uniqueId: uniqueId,
      title: title,
      userName:userName,
      surname: surname,
      name: name,
      otherNames: otherNames,
      dob: dob,
      gender: gender,
      lga: lga,
      email: email,
      password: password
    };
  
    localStorage.setItem(uniqueId, JSON.stringify(userData));
    localStorage.setItem("currentUser", uniqueId);
  
    window.location.href = "success.html";
  });
  