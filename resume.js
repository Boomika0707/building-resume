document.getElementById("saveResume").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var linkedin = document.getElementById("linkedin").value;
  var github = document.getElementById("github").value;
  var object = document.getElementById("object").value;
  var skill = document.getElementById("skill").value;
  var exp = document.getElementById("exp").value;

  var resumeData = {
    name: name,
    phone: phone,
    email: email,
    linkedin: linkedin,
    github: github,
    object: object,
    skill: skill,
    exp: exp,
  };

  var resumeDataJSON = JSON.stringify(resumeData);
  localStorage.setItem("resumeData", resumeDataJSON);
  alert("resume saved successfully to local storage");
});

document.getElementById("resetFields").addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("github").value = "";
  document.getElementById("object").value = "";
  document.getElementById("skill").value = "";
  document.getElementById("exp").value = "";
});

document.getElementById("printResume").addEventListener("click", () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));
  if (resumeData) {
    const print = window.open("", "_blank");

    
    print.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Printed Resume</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div class="resume-section">
          <h2>Name:</h2>
          <p>${resumeData.name}</p>
        </div>
        <div class="resume-section">
          <h2>Phone:</h2>
          <p>${resumeData.phone}</p>
        </div>
        <div class="resume-section">
          <h2>Email:</h2>
          <p>${resumeData.email}</p>
        </div>
        <div class="resume-section">
          <h2>LinkedIn:</h2>
          <p>${resumeData.linkedin}</p>
        </div>
        <div class="resume-section">
          <h2>GitHub:</h2>
          <p>${resumeData.github}</p>
        </div>
        <div class="resume-section">
          <h2>Qualifications:</h2>
          <p>${resumeData.objcet}</p>
        </div>
        <div class="resume-section">
          <h2>Experience:</h2>
          <p>${resumeData.skill}</p>
        </div>
        <div class="resume-section">
          <h2>Skills:</h2>
          <p>${resumeData.exp}</p>
        </div>
      </body>
      </html>
    `);

    
  }
});