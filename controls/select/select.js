export default class Select {
  #el$;
  #options;

  constructor(selector, options = {}) {
    this.#el$ = document.querySelector(selector);
    this.#el$.innerHTML = Select.#renderTemplate(options.placeholder, options.data);

    this.#el$.addEventListener('click', () => {
      this.#toggleSelect();
    });

    console.dir(this.#el$.innerHTML);
  }

  static #renderTemplate(placeholder = 'Choose something', options) {
    options = options.map((item) => {
      return `<div class="select__option" data-value="${item.value}">${item.label}</div>`;
    });
    console.log(options);
    return `
      <div class="select">
        <div class="select__placeholder">${placeholder}</div>
        <div class="select__options">
          ${options.join('')}
        </div>
      </div>
    `;
  }

  get #isOpen() {
    return this.#el$.classList.contains('select--open');
  }

  #toggleSelect() {
    if (this.#isOpen) {
      this.#el$.classList.remove('select--open');
    } else {
      this.#el$.classList.add('select--open');
    }
  }
}
