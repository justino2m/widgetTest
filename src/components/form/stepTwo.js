import {
  setState,
  getState,
  deleteFormElements,
  generateFormElements,
} from "../../services";

import { formContents } from "./forms";

export class StepTwo {
  constructor() {
    this.html = null;
    this.forms = formContents["stepTwo"];

    this.initialize();
  }

  initialize() {
    const stepTwo = document.createElement("div");
    stepTwo.classList.add("widget-form-segment", "widget-form-segment-step-2");

    const insertforms = this.forms
      .filter((form) => !form.hidden)
      .map((form) => form.name);
    generateFormElements(
      stepTwo,
      insertforms,
      this.forms,
      this.onChanges.bind(this),
      "beforeend"
    );

    this.html = stepTwo;
  }

  onChanges(name, value, operator, checked) {}
}
