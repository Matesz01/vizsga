const API = 'http://192.168.11.158:8080';
let registeredEmail = '';

function wireToggle(btnId, inputId){
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  btn.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.textContent = isHidden ? 'Hide' : 'Show';
  });
}

wireToggle('togglePassword', 'password');
wireToggle('toggleConfirm', 'passwordagain');

// ---- Kód-beviteli mezők ----
const codeInputs = document.querySelectorAll('#codeRow input');

codeInputs.forEach((input, i) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
    if (input.value && i < codeInputs.length - 1) codeInputs[i + 1].focus();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && i > 0) codeInputs[i - 1].focus();
  });
  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    digits.split('').forEach((d, j) => { codeInputs[j].value = d; });
  });
});

// ---- Regisztráció ----
const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('passwordagain').value;

  if (password !== confirm) {
    alert('A két jelszó nem egyezik.');
    return;
  }

  const response = await fetch(`${API}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  if (response.ok) {
    registeredEmail = email;
    document.getElementById('verifyEmail').textContent = email;
    document.getElementById('verifyModal').classList.add('open');
    codeInputs[0].focus();
  } else {
    alert('Hiba történt a regisztráció során.');
  }
});

// ---- Kód ellenőrzése ----
document.getElementById('verifyBtn').addEventListener('click', async () => {
  const code = [...codeInputs].map(i => i.value).join('');
  if (code.length < 6) {
    alert('Add meg a 6 jegyű kódot.');
    return;
  }

  const response = await fetch(`${API}/api/auth/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: registeredEmail, code })
  });

  if (response.ok) {
    window.location.href = 'signin.html';
  } else {
    alert('Hibás vagy lejárt kód.');
  }
});

// ---- Kód újraküldése ----
document.getElementById('resendBtn').addEventListener('click', async () => {
  await fetch(`${API}/api/auth/resend-code`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: registeredEmail })
  });
  alert('Új kódot küldtünk.');
});