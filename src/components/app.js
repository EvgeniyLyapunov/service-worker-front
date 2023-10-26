import FishNewsWidget from './fish-news-widget/FishNewsWidget';

const root = document.getElementById('root');
const countOfNewsOnPage = 3;
const path = `https://fish-news-api.onrender.com/${countOfNewsOnPage}`;

const fishNewsWidget = new FishNewsWidget(root, path);
fishNewsWidget.renderToDOM();

if (navigator.serviceWorker) {
	window.addEventListener('load', async () => {
		try {
			if (navigator.serviceWorker) {
				await navigator.serviceWorker.register('../service.worker.js');
			}
			// await registration.unregister();
		} catch (e) {
			console.error(e);
		}
	});
}

// ниже закоментированный способ удалить сервис воркер

// navigator.serviceWorker.getRegistrations().then(function (registrations) {
//   for (let registration of registrations) {
//     registration.unregister();
//   }
// });
