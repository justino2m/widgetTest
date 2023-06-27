import { getState } from "../../services";
import { FormHeader } from "./header";
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";
import { StepThree } from "./stepThree";
import { Button } from "../button";
import { validate } from "./validation";
export class FormContainer {
  constructor(form) {
    this.html = null;
    this.step = 1;
    this.submitted = false;
    this.initialize(form);
  }

  initialize(form) {
    const formContainer = document.createElement("div");
    formContainer.classList.add("widget-form-container", "card");

    const formHeader = new FormHeader({
      title: form.TITLE,
      subTitle: form.SUBTITLE,
    });

    const formContent = document.createElement("form");
    formContent.classList.add("card-content", "widget-sign-up-form");

    const stepOne = new StepOne(this.checkErrorStatus);
    const stepTwo = new StepTwo(this.checkErrorStatus);
    const stepThree = new StepThree(this.checkErrorStatus);

    formContent.appendChild(stepOne.html);
    formContent.appendChild(stepTwo.html);
    formContent.appendChild(stepThree.html);

    const submitButton = new Button({
      name: "next",
      label: "Next",
      onClick: () => this.submit(),
    });
    formContent.appendChild(submitButton.html);

    const footer = document.createElement("div");
    footer.classList.add("card-content", "widget-form-footer");
    const footerText = document.createElement("span");
    footerText.classList.add("widget-font-medium-light");
    footerText.innerText = form.FOOTER_TEXT;
    footer.appendChild(footerText);

    formContainer.appendChild(formHeader.html);
    formContainer.appendChild(formContent);
    formContainer.appendChild(footer);

    this.html = formContainer;
  }

  updateStep() {
    const allSteps = document.querySelectorAll(".widget-form-segment");
    allSteps.forEach((step) => step.classList.add("widget-hidden"));
    const selectedStepForm = document.querySelector(`.widget-form-segment-step-${this.step}`);
    selectedStepForm.classList.remove("widget-hidden");

    const allStepsIcons = document.querySelectorAll(".widget-form-step");
    allStepsIcons.forEach((step) => step.classList.remove("widget-form-step-active"));
    const selectedStepIcon = document.querySelector(`.widget-form-step-${this.step}`);
    selectedStepIcon.classList.add("widget-form-step-active");
  }

  updateErrorStatus(errorElementNames) {
    const widgetFormElements = document.querySelectorAll(".widget-form-container");
    widgetFormElements.forEach(element => element.classList.remove("widget-error"));

    errorElementNames.forEach((elementName) => {
      const element = document.querySelector(`.widget-${elementName}`);
      if (element) {
        element.classList.add("widget-error");
      }
    });

    if (errorElementNames.length > 0) {
      const widgetFormButton = document.querySelector(".widget-form-button-container");
      widgetFormButton.classList.add("widget-error");
    }
  }

  async checkErrorStatus() {
    if (!this.submitted) {
      return false;
    }
    const formResults = getState();
    const checkstauts = await validate(formResults, this.step);

    if (checkstauts?.error) {
      this.updateErrorStatus(checkstauts.error);
      return false;
    }
    this.updateErrorStatus([]);
    return true;
  }

  async submit() {
    this.submitted = true;
    const isSuccessed = await this.checkErrorStatus();
    if (!isSuccessed) {
      return;
    }
    const formResults = getState();
    console.log(formResults);
    this.step = this.step + 1;
    this.updateStep();
  }
}
