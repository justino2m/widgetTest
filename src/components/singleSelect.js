export class SingleSelect {
    constructor({
        name = "",
        label = "",
        type = "select",
        required = false,
        options = [],
        onChange = null
    }) {
      this.html = null;
      this.configure = {
        name,
        label,
        type,
        required,
        options,
        onChange
      };
      this.initialize();
    }

    initialize() {
      const $this = this;
      const SingleSelect = document.createElement("div");
      const singleSelectClasses = [
        "input-field", 
        "widget-single-select-container",
        "widget-form-container",
        `widget-${this.configure.name}`
      ];
      SingleSelect.classList.add(...singleSelectClasses);

      const select = document.createElement("select");
      
      const defaltOption = document.createElement("option");
      defaltOption.setAttribute("value", "");
      defaltOption.setAttribute("disabled", true);
      defaltOption.setAttribute("selected", true);
      defaltOption.innerText = "";
      select.appendChild(defaltOption);

      if (this.configure.options.length > 0) {
        this.configure.options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.setAttribute("value", option.value);
          optionElement.innerText = option.text;
          select.appendChild(optionElement);
        });
      }

      const label = document.createElement("label");
      label.classList.add("widget-font-base-bold", "widget-select-label");
      label.innerText = this.configure.label;

      SingleSelect.appendChild(select);
      SingleSelect.appendChild(label);

      select.addEventListener("change", (e) => {
        $this.configure.onChange(this.configure.name, Number(e.target.value));
      });

      this.html = SingleSelect;
    }
}