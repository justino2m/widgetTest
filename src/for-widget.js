import { WidgetButton } from "./components/widgetButton";
import { FormContainer } from "./components/form";
import { Styles } from "./styles";
export class FORWidget {
  constructor({
    position = "bottom-right",
    vertical = 0,
    horizontal = 0,
    widgetPrefixText = "",
    widgetCoach = "",
    collapsed = true,
    form = {},
  }) {
    this.position = this.getPosition(position, vertical, horizontal);

    this.initialize({
      widgetPrefixText,
      widgetCoach,
      collapsed,
      form,
    });
  }

  getPosition(position, v, h) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: `${v}px`,
      [horizontal]: `${h}px`,
    };
  }

  async initialize({
    widgetPrefixText,
    widgetCoach,
    collapsed,
    form,
  }) {
    this.createStyles();
    await this.createMaterialUI();

    const container = document.createElement("div");
    container.classList.add("for-widget-container");
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    // Button container content
    const widgetButton = new WidgetButton({
      widgetPrefixText,
      widgetCoach,
      collapsed,
      formDisplay: this.formDisplay,
    });

    // Form Container Content
    const formContainer = new FormContainer(form);

    container.appendChild(formContainer.html);
    container.appendChild(widgetButton.html);

    this.initializeMaterialComponents();
    formContainer.updateStep();
  }

  createStyles() {
    const styles = new Styles();
  }

  async createMaterialUI() {
    const urls = [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
    ];

    const promises = urls.map((url) => {
      return new Promise((resolve, reject) => {
        const tag = url.endsWith(".js") ? "script" : "link";
        const element = document.createElement(tag);
        if (tag === "link") {
          element.rel = "stylesheet";
          element.href = url;
          resolve();
        } else {
          element.src = url;
          element.onload = resolve;
          element.onerror = reject;
        }
        document.head.appendChild(element);
      });
    });

    return Promise.all(promises);
  }

  initializeMaterialComponents() {
    // select box initialize 
    const selectboxes = document.querySelectorAll('.widget-single-select-container select');
    M.FormSelect.init(selectboxes, {});
  }

  formDisplay(open) {
    const formContainer = document.querySelector(".widget-form-container");

    if (open) {
      formContainer.style.opacity = 1;
      formContainer.style.visibility = "visible";
      return;
    }
    formContainer.style.opacity = 0;
    formContainer.style.visibility = "hidden";
  }
}
