document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username === '' || password === '') {
      errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
      errorMessage.textContent = '';
      // Redireciona para a segunda página (por exemplo, `pagina2.html`)
      window.location.href = './index.html';
    }
  });
  