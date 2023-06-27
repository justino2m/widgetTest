export class Button {
    constructor({
      name = "",
      label = "",
      onClick = null
    }) {
      this.html = null;
      this.configure = {
        name,
        label,
        onClick
      };
      this.initialize();
    }
  
    initialize() {
      const $this = this;
      const buttonContainer = document.createElement("div");
      const buttonContainerClasses = [
        "widget-form-button-container",
        "widget-form-container",
        `widget-${this.configure.name}`
      ];
      buttonContainer.classList.add(...buttonContainerClasses);
  
      const button = document.createElement("a");
      button.classList.add("waves-effect", "waves-light", "btn", "widget-font-base-bold");
      button.innerText = this.configure.label;

      buttonContainer.appendChild(button);
    
  
      button.addEventListener("click", (e) => {
          $this.configure.onClick();
      });

      this.html = buttonContainer;
    }
  }