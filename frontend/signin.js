const toggleBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
});

const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://192.168.11.158:8080/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (response.ok) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'lumi-home2.html';
  } else {
    alert('Hibás email vagy jelszó.');
  }
});