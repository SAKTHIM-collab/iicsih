function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                team: document.getElementById('team').value,
                idea: document.getElementById('idea').value
            };
            
            submitForm(formData);
        }
    });
    
    function validateForm() {
        let isValid = true;
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        
        clearErrors();
        
        if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!phone.value.match(/^[0-9]{10}$/)) {
            showError(phone, 'Please enter a valid 10-digit phone number');
            isValid = false;
        }
        
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showError(field, 'This field is required');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function showError(field, message) {
        const errorElement = field.nextElementSibling;
        errorElement.textContent = message;
        field.style.borderColor = '#ff4757';
    }
    
    function clearErrors() {
        const errorMessages = form.querySelectorAll('.error-message');
        const inputs = form.querySelectorAll('input, textarea');
        
        errorMessages.forEach(msg => {
            msg.textContent = '';
        });
        
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
    
    function submitForm(formData) {
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                form.reset();
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            } else {
                alert('Registration failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }
});