document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const uniqueId = document.getElementById("uniqueId").value;
  const cycForm = document.getElementById("registration-form");
  const loginSection = document.getElementById("login-section");
  const userData = JSON.parse(localStorage.getItem(uniqueId));

  if (userData && userData.uniqueId === uniqueId) {
   
    document.getElementById('userId').value = userData.uniqueId;
    document.getElementById('title').value = userData.title;
    document.getElementById('surname').value = userData.surname;
    document.getElementById('name').value = userData.name + " " + userData.otherNames || [];
     loginSection.style.display = "none";
    cycForm.style.display = "block";
    localStorage.setItem("programUser", JSON.stringify(userData));
  } 
  else {
    loginSection.style.display = "block";
    cycForm.style.display = "none";
    alert("PHN-Code does not exist");
  }


 
  
});


document.getElementById("occupation").addEventListener("change", function () {

  const occupation = this.value;
  const applicantInfo = document.getElementById("applicant-info");
  const studentInfo = document.getElementById("student-info");

  if (occupation === "Applicant") {
    applicantInfo.style.display = "block";
    studentInfo.style.display = "none";
  } else if (occupation === "Student") {
    applicantInfo.style.display = "none";
    studentInfo.style.display = "block";
  } else {
    applicantInfo.style.display = "none";
    studentInfo.style.display = "none";
  }
});

document.getElementById("student-category").addEventListener("change", function () {
  const category = this.value;
  document.getElementById("primary-info").style.display = category === "Primary" ? "block" : "none";
  document.getElementById("secondary-info").style.display = category === "Secondary" ? "block" : "none";
  document.getElementById("tertiary-info").style.display = category === "Tertiary" ? "block" : "none";
});


document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const uniqueId= document.getElementById("userId").value.trim();
  const title= document.getElementById("title").value;
  const surname= document.getElementById("surname").value.trim();
  const name= document.getElementById("name").value.trim();
  const occupation = document.getElementById('occupation').value.trim();
  const address = document.getElementById('address').value.trim();
  const town = document.getElementById('town').value.trim();
  const churchDenomination= document.getElementById("church-denomination").value.trim();
  const churchAddress = document. getElementById('church-address').value.trim();
  const workshopGroup = document.getElementById("workshop-group").value.trim();
  
  const participantData = {
    uniqueId: uniqueId,
    title: title,
    surname: surname,
    name: name,
    occupation: occupation,
    address: address,
    town: town,
    churchDenomination: churchDenomination,
    churchAddress: churchAddress,
    workshopGroup: workshopGroup,
  };


  localStorage.setItem(uniqueId,JSON.stringify(participantData)); 
  localStorage.setItem("cycDetails",uniqueId);




  // const formData = new FormData(e.target);

  // const data = {};
  // formData.forEach((value, key) => (data[key] = value));

 
  // console.log("Submitting form data:", data);
    

  // Submit data to Google Drive (backend logic to be implemented)
  // alert("Form submitted successfully!");
  window.location.href = "tag.html";
});