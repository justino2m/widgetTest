export class MultiSelect {
  constructor({
    name = "",
    label = "",
    type = "text",
    required = false,
    options = [],
    placeholder = "",
    onChange = null
  }) {
    this.html = null;
    this.configure = {
      name,
      label,
      type,
      required,
      options,
      placeholder,
      onChange
    };
    this.initialize();
  }

  initialize() {
    const $this = this;
    const multiSelect = document.createElement("div");
    const multiSelectClasses = [
      "widget-multi-select-container", 
      "widget-form-container",
      `widget-${this.configure.name}`
    ];
    multiSelect.classList.add(...multiSelectClasses);

    const multiSelectLabel = document.createElement("label");
    multiSelectLabel.classList.add("widget-font-base-bold", "widget-multi-select-label");
    multiSelectLabel.innerText = this.configure.label;
    multiSelect.appendChild(multiSelectLabel);
  
    if (this.configure.options.length > 0) {
      this.configure.options.forEach((option) => {
        const optionElement = document.createElement("p");
        optionElement.classList.add("widget-mb-10");
        const label = document.createElement("label");
        label.classList.add("widget-font-medium-light");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", this.configure.name);
        input.setAttribute("value", option.value);
        input.classList.add("filled-in");

        const span = document.createElement("span");
        span.innerText = option.text;

        label.appendChild(input);
        label.appendChild(span);
        optionElement.appendChild(label);
        
        multiSelect.appendChild(optionElement);

        input.addEventListener("change", (e) => {
          $this.configure.onChange(this.configure.name, Number(e.target.value), input.checked);
        });
      });
    }

    this.html = multiSelect;
  }
}