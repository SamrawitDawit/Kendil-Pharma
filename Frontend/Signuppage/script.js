
document.addEventListener("DOMContentLoaded", function () {
  function toggleForm(formId) {
    var formContainer = document.getElementById(formId + '-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  }

  function closeForm(formId) {
    var formContainer = document.getElementById(formId + '-container');
    formContainer.style.display = 'none';
  }

  function validateForm(formId) {
    var form = document.getElementById(formId);
    var name = form.querySelector('#name');
    var email = form.querySelector('#email');
    var password = form.querySelector('#password');
    var password2 = form.querySelector('#password2');
  
    form.querySelectorAll('small').forEach(function (error) {
      error.textContent = '';
    });

    // Check if required fields are filled
    if (name.value.trim() === '') {
      displayError(name, 'Name is required.');
      return false;
    }


    if (email.value.trim() === '') {
      displayError(email, 'Email is required.');
      return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
    displayError(email, 'Invalid email address.');
    return false;
  }


    if (password.value.trim() === '') {
      displayError(password, 'Password is required.');
      return false;
    }

    if (password.value.trim().length < 4) {
      displayError(password, 'Password must be at least 4 characters long.');
      return false;
    }

    if (password2.value.trim() === '') {
      displayError(password2, 'Confirm Password is required.');
      return false;
    }

    // Check if passwords match
    if (password.value !== password2.value) {
      displayError(password2, 'Passwords do not match.');
      return false;
    }
    
    return true;
  }

  
  function validateForm1(form1Id) {
    var form1 = document.getElementById(form1Id);
    var name2 = form1.querySelector('#name2');
    var email2 = form1.querySelector('#email2');
    var password3 = form1.querySelector('#password3');
    var password4 = form1.querySelector('#password4');
    
    form1.querySelectorAll('small').forEach(function (error) {
      error.textContent = '';
    });

    if (name2.value.trim() === '') {
      displayError(name2, 'Name is required.');
      return false;
    }


    if (email2.value.trim() === '') {
      displayError(email2, 'Email is required.');
      return false;
    }

    var email2Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email2Pattern.test(email2.value.trim())) {
    displayError(email2, 'Invalid email address.');
    return false;
  }


    if (password3.value.trim() === '') {
      displayError(password3, 'Password is required.');
      return false;
    }

    if (password3.value.trim().length < 4) {
      displayError(password3, 'Password must be at least 4 characters long.');
      return false;
    }

    if (password4.value.trim() === '') {
      displayError(password4, 'Confirm Password is required.');
      return false;
    }

    if (password3.value !== password4.value) {
      displayError(password4, 'Passwords do not match.');
      return false;
    }
    
    return true;
  }

  
  function displayError(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.textContent = message;
    small.style.color = 'red'; 
    
  }

  document.getElementById('form').addEventListener('submit', function (event) {
    var formId = event.target.id;
    if (!validateForm(formId)) {
      event.preventDefault(); 
    }
  });

  document.getElementById('form1').addEventListener('submit', function (event) {
    var form1Id = event.target.id;
    if (!validateForm1(form1Id)) {
      event.preventDefault(); 
    }
  });

  document.getElementById('toggle-customer-form').addEventListener('click', function () {
    toggleForm('adminForm');
  });

  document.getElementById('toggle-pharmacist-form').addEventListener('click', function () {
    toggleForm('userForm');
  });

  document.getElementById('close-customer-form').addEventListener('click', function () {
    closeForm('adminForm');
  });

  document.getElementById('close-pharmacist-form').addEventListener('click', function () {
    closeForm('userForm');
  });

});



