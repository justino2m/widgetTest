import { 
    setState, 
    getState,
    deleteFormElements,
    generateFormElements
  } from "../../services";
  
  import { formContents } from "./forms";
  
  export class StepThree {
    constructor() {
      this.html = null;
      this.forms = formContents["stepThree"];
  
      this.initialize();
    }
  
    initialize() {
      const stepThree = document.createElement("div");
      stepThree.classList.add("widget-form-segment", "widget-form-segment-step-3");
  
      const insertforms = this.forms.filter(form => !form.hidden)
                                    .map(form => form.name);
      generateFormElements(stepThree, insertforms, this.forms, this.onChanges.bind(this), "beforeend");
    
      this.html = stepThree;
    }
  
    onChanges(name, value, operator, checked) {
      
    }
  }