
  const uniqueId = localStorage.getItem('cycDetails');
  const cycDetails= JSON.parse(localStorage.getItem(uniqueId));


  // Prepare tag preview data but don't display it yet
  document.getElementById("tagTitle").innerText = cycDetails.title;
  document.getElementById("tagSurname").innerText = cycDetails.surname;
  document.getElementById("tagName").innerText = cycDetails.name;
  document.getElementById("tagUserId").innerText = cycDetails.uniqueId;
  document.getElementById('tagOccupation').innerText = `Occupation: ${cycDetails.occupation}`;
  document.getElementById('tagResidential').innerText = `Residential Address: ${cycDetails.address}`;

function printTag() {
  // const originalContent = document.getElementById("tagPreview").innerHTML;
  // const tagContent = document.getElementById("tagPreview").outerHTML + document.body.innerHTML;

    
  // document.body.innerHTML = originalContent;
  window.print();
  // document.body.innerHTML = tagContent;
}

function exportToPDF() {
  const opt ={
    margin:0,
    filename: 'A6_Document.pdf',
    image: {type: 'jpeg', quality: 1}, 
    html2canvas: {scale:2},
    jsPDF:{unit: 'mm', format:[105, 148], orientation:'portrait'}
  };

  html2pdf().set(opt).from(document.querySelector('tagPreview')).save();
}

function backToPortal() {
  window.location.href = 'portal.html';
}
