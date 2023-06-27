import { buildContent } from "../../services";
export class FormHeader {
  constructor({ title, subTitle }) {
    this.html = null;
    this.titleText = title;
    this.subTitleText = subTitle;
    this.initialize();
  }

  initialize() {
    const contents = [
      {
        name: "title",
        tag: "span",
        classes: [
          "card-title",
          "widget-sign-up-title",
          "widget-font-header-bold",
        ],
        contentType: "innerText",
        html: this.titleText,
        children: null,
      },
      {
        name: "subTitle",
        tag: "span",
        classes: ["widget-font-medium-light", "widget-sign-up-subtitle"],
        contentType: "innerText",
        html: this.subTitleText,
        children: null,
      },
    ];

    const formHeader = document.createElement("div");
    formHeader.classList.add("card-content", "widget-sign-up-form-header");
    buildContent(formHeader, contents);

    // steps
    const stepContainer = document.createElement("div");
    stepContainer.classList.add("widget-form-step-container");

    [1, 2, 3].forEach((stepNumber) => {
      const step = document.createElement("div");
      const classes = ["widget-form-step", "widget-icon", `widget-form-step-${stepNumber}`];
      step.classList.add(...classes);

      const stepSpan = document.createElement("span");
      stepSpan.classList.add("widget-font-base-bold", "widget-form-step-span");
      stepSpan.innerText = stepNumber;
      step.appendChild(stepSpan);
      stepContainer.appendChild(step);
    });

    formHeader.appendChild(stepContainer);

    this.html = formHeader;
  }
}
