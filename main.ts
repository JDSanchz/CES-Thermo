document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = 'This is a message set by TypeScript!';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;
      
      if (!isEmailValid(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      if (message.length <= 10) {
        alert('The message must be longer than 10 characters.');
        return;
      }
      
      // If both checks pass, you can proceed with form submission
      console.log('Form data is valid:', { email, message });
      // Submit form data to server or handle it as required
    });
  });
  
  function isEmailValid(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,4}\.[0-9]{1,4}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  
  