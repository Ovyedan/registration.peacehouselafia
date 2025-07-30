window.addEventListener("load", function() {
  const currentUser = localStorage.getItem("currentUser");
  const userData = JSON.parse(localStorage.getItem(currentUser));

  document.getElementById("uniqueId").innerText = userData.uniqueId;

  // copy code
  document.getElementById('copyButton').addEventListener('click', () => {
    const userId = document.getElementById('uniqueId').textContent;
    navigator.clipboard.writeText(userData.uniqueId).then(() => {
      alert('Copied to clipboard!');
    });
  });

  // Prepare tag preview data but don't display it yet
  // document.getElementById("tagTitle").innerText = userData.title;
  // document.getElementById("tagSurname").innerText = userData.surname;
  // document.getElementById("tagName").innerText = userData.name;
  // document.getElementById("tagOtherNames").innerText = userData.otherNames;
  // document.getElementById("tagUserId").innerText = userData.uniqueId;
});

// function showPreview() {
//   // Display the tag preview area
//   document.getElementById("tagPreview").style.display = "block";
// }

// function printTag() {
//   const originalContent = document.body.innerHTML;
//   const tagContent = document.getElementById("tagPreview").outerHTML;

//   document.body.innerHTML = tagContent;
//   window.print();
//   document.body.innerHTML = originalContent;
// }
