const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});






const feedbackForm = document.getElementById('feedback-form');
const feedbackStatus = document.getElementById('feedback-status');

feedbackForm?.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(feedbackForm);

  try {
    const res = await fetch(feedbackForm.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      feedbackStatus.textContent = 'Thank you for your feedback!';
      feedbackForm.reset();
    } else {
      feedbackStatus.textContent = 'Something went wrong. Please try again.';
    }
  } catch (err) {
    feedbackStatus.textContent = 'Network error. Try again later.';
  }
});

