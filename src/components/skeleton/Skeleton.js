import './skeleton.css';

class Skeleton {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = null;
    this.skeletone = null;

    this.setErrorNetworkBg = this.setErrorNetworkBg.bind(this);
  }

  renderToDOM() {
    this.element = document.createElement('div');
    this.element.classList.add('container', 'hide');
    this.skeletone = document.createElement('div');
    this.skeletone.classList.add('skeleton');
    this.element.insertAdjacentElement('afterbegin', this.skeletone);
    this.parentElement.insertAdjacentElement('afterbegin', this.element);
  }

  toggleHideElement() {
    this.setErrorNetworkBg();
    this.element.classList.toggle('hide');
  }

  setErrorNetworkBg(flag = false) {
    if (flag) {
      this.skeletone.classList.add('error500');
    } else {
      this.skeletone.classList.remove('error500');
    }
  }
}

export default Skeleton;
