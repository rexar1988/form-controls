export default class Select {
  #el$;

  constructor(selector, options = {}) {
    const { placeholder, items } = options;
    this.#el$ = document.querySelector(selector);
    this.#el$.innerHTML = Select.#renderTemplate(options.placeholder);

    this.#el$.addEventListener('click', () => {
      this.#toggleSelect();
    });

    console.dir(this.#el$.innerHTML);
  }

  static #renderTemplate(placeholder = 'Choose something') {
    return `
      <div class="select">
        <div class="select__placeholder">${placeholder}</div>
        <div class="select__options">
          <div class="select__option">1</div>
          <div class="select__option">2</div>
          <div class="select__option">3</div>
          <div class="select__option">4</div>
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
