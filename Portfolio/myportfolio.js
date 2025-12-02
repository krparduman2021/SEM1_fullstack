
// Section toggling logic for navigation
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('nav a');
	const sections = {
		home: document.getElementById('home'),
		about: document.getElementById('about'),
		skills: document.getElementById('skills'),
		education: document.getElementById('education'),
		experience: document.getElementById('experience'),
		contact: document.getElementById('contact')
	};

	function showSection(sectionId) {
		Object.keys(sections).forEach(id => {
			if (sections[id]) {
				sections[id].style.display = (id === sectionId) ? (id === 'home' ? 'flex' : 'block') : 'none';
			}
		});
	}

	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			navLinks.forEach(l => l.classList.remove('active'));
			this.classList.add('active');
			const sectionId = this.getAttribute('href').replace('#', '');
			showSection(sectionId);
			e.preventDefault();
		});
	});

	// Show home by default
	showSection('home');
});

