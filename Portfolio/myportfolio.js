
// Smooth scrolling and active link highlighting (single-page layout)
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = Array.from(document.querySelectorAll('nav a'));
	const sectionIds = navLinks.map(a => a.dataset.target).filter(Boolean);
	const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

	// Clicking nav items should not navigate — sections are all on one page.
	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			// prevent any default behavior and just toggle active class locally
			e.preventDefault();
			navLinks.forEach(l => l.classList.remove('active'));
			this.classList.add('active');
			// do not scroll or hide sections — user can scroll naturally
		});
	});

	// Update active link on scroll so nav reflects the section currently in view
	function onScroll() {
		const fromTop = window.scrollY + 80; // small offset for fixed header
		let currentId = sectionIds[0];
		for (let i = 0; i < sections.length; i++) {
			const sec = sections[i];
			if (!sec) continue;
			if (sec.offsetTop <= fromTop) currentId = sec.id;
		}
		navLinks.forEach(l => l.classList.remove('active'));
		const activeLink = navLinks.find(l => l.dataset.target === currentId);
		if (activeLink) activeLink.classList.add('active');
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
});

