import { MaterialIcon } from "./materialIcon";
import { logoOpenSvg, logoCloseSvg } from "./icons";
export class WidgetButton {
    constructor({ 
        widgetPrefixText = "",
        widgetCoach = "",
        collapsed = true,
        formDisplay = null
    }) {
        this.html = null;
        this.open = false;
        this.widgetPrefixText = widgetPrefixText;
        this.widgetCoach = widgetCoach;
        this.collapsed = collapsed;

        this.formDisplay = function(open) {
            formDisplay(open);
        }

        this.initialize();
    }

    initialize() {
        const $this = this;
        // Button container content
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("widget-button-container");

        // Button Image
        const widgetButtonImg = document.createElement("div");
        const widgetButtonImgClasses = this.collapsed ? [
            "widget-button-img-container"
        ] : ["widget-button-img"];
        widgetButtonImg.classList.add(...widgetButtonImgClasses);

        const widgetOpenImg = document.createElement("div");
        widgetOpenImg.innerHTML = logoOpenSvg;
        widgetOpenImg.classList.add("widget-icon");

        const widgetCloseImg = document.createElement("div");
        widgetCloseImg.innerHTML = logoCloseSvg;
        widgetCloseImg.classList.add("widget-icon", "widget-hidden");

        widgetButtonImg.appendChild(widgetOpenImg);
        widgetButtonImg.appendChild(widgetCloseImg);

        // Button Text
        const widgetText = document.createElement("div");
        widgetText.classList.add("widget-text");
        
        const widgetPrefixText = document.createElement("span");
        const widgetTextPrefixClasses = [
            "widget-font-base-light",
            "widget-font-white-color"
        ];
        widgetPrefixText.classList.add(...widgetTextPrefixClasses);
        widgetPrefixText.innerText = this.widgetPrefixText;
        
        const widgetCoach = document.createElement("span");
        const widgetCompanyClasses = [
            "widget-font-base-bold",
            "widget-font-white-color"
        ];
        widgetCoach.classList.add(...widgetCompanyClasses);
        widgetCoach.innerText = this.widgetCoach;

        widgetText.appendChild(widgetPrefixText);
        widgetText.appendChild(widgetCoach);

        // Button Close Icon
        const widgetCloseIcon = document.createElement("div");
        const closeIcon = new MaterialIcon({ name: "close", size: 10 });
        widgetCloseIcon.appendChild(closeIcon.html);
        widgetCloseIcon.classList.add("widget-close-icon", "widget-icon");

        buttonContainer.appendChild(widgetButtonImg);
        if (!this.collapsed) {
            buttonContainer.appendChild(widgetText);
        }
        buttonContainer.appendChild(widgetCloseIcon);

        // event listener
        const clickArea = widgetButtonImg + widgetText; 
        widgetButtonImg.addEventListener('click', function(event) {
            $this.open = !$this.open;
            if ($this.open) {
                widgetOpenImg.classList.add("widget-hidden");
                widgetCloseImg.classList.remove("widget-hidden");
            } else {
                widgetOpenImg.classList.remove("widget-hidden");
                widgetCloseImg.classList.add("widget-hidden");
            }
            $this.formDisplay($this.open)
        });

        widgetText.addEventListener('click', function(event) {
            const clickEvent = new Event('click');
            widgetButtonImg.dispatchEvent(clickEvent);
        });

        widgetCloseIcon.addEventListener('click', function(event) {
            const widget = document.querySelector(".for-widget-container");
            widget.remove();
        });

        this.html = buttonContainer;
    }
}