export class TextInput {
  constructor({
      name = "",
      label = "",
      type = "text",
      required = false,
      placeholder = "",
      onChange = null
  }) {
    this.html = null;
    this.configure = {
      name,
      label,
      type,
      required,
      placeholder,
      onChange
    };
    this.initialize();
  }

  initialize() {
    const $this = this;
    const textInput = document.createElement("div");
    const singleTextInputClasses = [
      "widget-text-input-container", 
      "widget-form-container",
      `widget-${this.configure.name}`
    ];
    textInput.classList.add(...singleTextInputClasses);

    const input = document.createElement("input");
    input.classList.add("widget-text-input", "widget-font-base-light");
    input.setAttribute("type", this.configure.type);
    input.setAttribute("required", this.configure.required);
    input.setAttribute("placeholder", this.configure.placeholder);
    input.setAttribute("name", this.configure.name);
    input.setAttribute("id", `widget-${this.configure.name}`);

    const label = document.createElement("label");
    label.classList.add("widget-input-label", "widget-font-base-bold");
    label.setAttribute("for", `widget-${this.configure.name}`);
    label.innerText = this.configure.label;

    textInput.appendChild(label);
    textInput.appendChild(input);

    input.addEventListener("change", (e) => {
        $this.configure.onChange(this.configure.name, e.target.value);
    });

    this.html = textInput;
  }
}