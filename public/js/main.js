// Busca el botón y recupera la preferencia del usuario al cargar la página.
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('devjobs-theme');

// Aplica el tema, actualiza el icono y mantiene la información accesible.
function updateTheme(isDark) {
	document.body.classList.toggle('dark-mode', isDark);
	themeToggle.setAttribute('aria-pressed', String(isDark));
	themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
	themeToggle.querySelector('span').textContent = isDark ? '☀' : '☾';
}

if (themeToggle) {
	// El tema oscuro se conserva aunque el usuario recargue la página.
	updateTheme(savedTheme === 'dark');

	// Cada clic alterna la clase CSS y guarda la nueva preferencia.
	themeToggle.addEventListener('click', () => {
		const isDark = !document.body.classList.contains('dark-mode');
		updateTheme(isDark);
		localStorage.setItem('devjobs-theme', isDark ? 'dark' : 'light');
	});
}
