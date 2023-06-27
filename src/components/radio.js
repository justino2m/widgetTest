export class RadioInput {
    constructor({
      name = "",
      label = "",
      type = "text",
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
      const radioInput = document.createElement("div");
      const radioInputClasses = [
        "widget-form-radio-container",
        "widget-form-container",
        `widget-${this.configure.name}`
      ];
      radioInput.classList.add(...radioInputClasses);
        
      const radioInputLabel = document.createElement("label");
      radioInputLabel.classList.add("widget-font-base-bold", "widget-form-radio-label");
      radioInputLabel.innerText = this.configure.label;
      radioInput.appendChild(radioInputLabel);

      if (this.configure.options.length > 0) {
        this.configure.options.forEach((option) => {
          const optionElement = document.createElement("p");
          optionElement.classList.add("widget-mb-10");
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("name", this.configure.name);
          input.setAttribute("value", option.value);
          input.classList.add("with-gap");
  
          const span = document.createElement("span");
          span.classList.add("widget-font-medium-light");
          span.innerText = option.text;
  
          label.appendChild(input);
          label.appendChild(span);
          optionElement.appendChild(label);
          
          radioInput.appendChild(optionElement);
  
          input.addEventListener("change", (e) => {
            $this.configure.onChange(this.configure.name, Number(e.target.value), input.checked);
          });
        });
      }
  
      this.html = radioInput;
    }
  }