import { fromEvent } from 'rxjs';
import moment from 'moment/moment';
import Skeleton from '../skeleton/Skeleton';
import getNewDataService from '../../services/getNewDataService';

import './fish-news-widget.css';

class FishNewsWidget {
	constructor(parentElement, path) {
		this.parentElement = parentElement;
		this.path = path;
		this.element = null;
		this.listOfNewsBlocks = null;
		this.refreshNewsBtn = null;
		this.refresh$ = null;
		this.refreshSubscription = null;

		this.skeleton = new Skeleton(parentElement);

		this.markUpWidget = this.markUpWidget.bind(this);
		this.renderToDOM = this.renderToDOM.bind(this);
		this.toggleHideElement = this.toggleHideElement.bind(this);
	}

	markUpWidget() {
		return `
      <div class="header">
        <h1 class="title">Новинки Рыбного Текста</h1>
        <button class="button">Обновить</button>
      </div>
      <ul class="content"></ul>
    `;
	}

	markUpNewsItem(data) {
		return `
      <h2 class="block-title">${moment.unix(data.date / 1000).format('HH:mm DD.MM.YY')}</h2>
      <div class="block-content">
        <img class="image" src=${data.image} alt="any picture">
        <p class="text">${data.text}</p>
      </div>
    `;
	}

	renderToDOM() {
		this.element = document.createElement('div');
		this.element.classList.add('container');
		this.element.innerHTML = this.markUpWidget();
		this.parentElement.insertAdjacentElement('afterbegin', this.element);

		this.skeleton.renderToDOM();

		this.listOfNewsBlocks = this.element.querySelector('.content');
		this.refreshNewsBtn = this.element.querySelector('.button');

		this.refresh$ = fromEvent(this.refreshNewsBtn, 'click');
		this.refreshSubscription = this.refresh$.subscribe(() => {
			this.toggleHideElement();
			this.skeleton.toggleHideElement();

			const obs$ = getNewDataService(this.path);

			obs$.subscribe({
				next: (data) => this.renderNewsItems(data),
				error: () => this.skeleton.setErrorNetworkBg(true),
			});
		});
	}

	renderNewsItems(data) {
		this.listOfNewsBlocks.innerHTML = '';
		data.forEach((item) => {
			const newsBlock = document.createElement('li');
			newsBlock.classList.add('block');
			newsBlock.innerHTML = this.markUpNewsItem(item);
			this.listOfNewsBlocks.insertAdjacentElement('afterbegin', newsBlock);
		});

		this.skeleton.toggleHideElement();
		this.toggleHideElement();
	}

	toggleHideElement() {
		this.element.classList.toggle('hide');
	}
}

export default FishNewsWidget;
