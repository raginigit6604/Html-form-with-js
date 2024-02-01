document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('myform');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const rollnoInput = document.getElementById('rollno');
  const courseInput = document.getElementById('course');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // to Prevent default or wrong form submission
    
    // Validate form fields
    if (validateName() && validateEmail() && validateRollno() && validateCourse()) {
        console.log('Form submitted successfully!');
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Rollno',rollnoInput.value);
        console.log('Course',courseInput.value);
    }
});
function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (email === '') {
        alert('Please enter your email.');
        return false;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateRollno() {
    const rollno = rollnoInput.value.trim();
    if (rollno === '') {
        alert('Please enter your rollno.');
        return false;
    }
    return true;
}
function validateCourse() {
    const course = courseInput.value.trim();
    if (course === '') {
        alert('Please enter your course.');
        return false;
    }
    return true;
}
});