if (localStorage.getItem('loggedIn') === 'true') {
  document.getElementById('authLinks').style.display = 'none';
  document.getElementById('profileMenu').style.display = 'block';
}

const profileIcon = document.getElementById('profileIcon');
const dropdown = document.getElementById('profileDropdown');

if (profileIcon) {
  profileIcon.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  // kattintás máshova → zárja be a menüt
  document.addEventListener('click', (e) => {
    if (!profileIcon.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'lumi-home2.html';
  });
}

function setHeart(btn, on) {
  btn.classList.toggle('active', on);
  btn.textContent = on ? '♥' : '♡';
}

document.querySelectorAll('.heart[data-event-id]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = 'signin.html';
      return;
    }

    const eventId = btn.dataset.eventId;
    const isFav = btn.classList.contains('active');

    const response = await fetch(`${API}/api/users/${userId}/favorites/${eventId}`, {
      method: isFav ? 'DELETE' : 'POST'
    });

    if (response.ok) {
      setHeart(btn, !isFav);
    } else {
      alert('Nem sikerült menteni a kedvencet.');
    }
  });
});