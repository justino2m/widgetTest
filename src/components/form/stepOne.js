import { 
  setState, 
  getState,
  deleteFormElements,
  generateFormElements
} from "../../services";

import { formContents, specificFormIds } from "./forms";
export class StepOne {
  constructor(
    callback = null
  ) {
    this.html = null;
    this.forms = formContents["stepOne"];
    this.callback = callback;
    this.initialize();
  }

  initialize() {
    const stepOne = document.createElement("div");
    stepOne.classList.add("widget-form-segment", "widget-form-segment-step-1");

    const insertforms = this.forms.filter(form => !form.hidden)
                                  .map(form => form.name);
    generateFormElements(stepOne, insertforms, this.forms, this.onChanges.bind(this), "beforeend");

    this.html = stepOne;
  }

  onChanges(name, value, operator, checked) {
    const insertedPosition = "afterend";
    if (name === "journeyStageId") {
      const deleteForms = ["otherJourneyStage"];
      deleteFormElements(deleteForms);

      if (value === specificFormIds.otherJourneyStageId) {
        const insertforms = ["otherJourneyStage"];
        generateFormElements("journeyStageId", insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
      }
    }

    if (name === "activePhysicianIds") {
      const activePhysicianIds = getState("activePhysicianIds");
      const getStalePhysicianIds = activePhysicianIds?.filter(id => id !== value);
      const reCheckSpecificIds = specificFormIds?.reCheckActivePhysicianIds;

      if (reCheckSpecificIds.includes(value)) {
        const toBeDeletedForms = [
          "reCheckId", 
          "otherActivePhysician",
          "noReReasonIds",
          "otherNoReReason",
          "stoppedReReasonIds",
          "otherStoppedReReason"
        ];
        const deleteForms = value === 4 ? toBeDeletedForms : toBeDeletedForms.filter(form => form !== "otherActivePhysician");
        deleteFormElements(deleteForms);

        const insertedCondition = (checked && !activePhysicianIds?.includes(3)) || 
              (checked && activePhysicianIds?.includes(3) && value === 4) ||
              (!checked && getStalePhysicianIds.some(id => reCheckSpecificIds.includes(id)) && !activePhysicianIds?.includes(3));

        if (insertedCondition) {
          const insertedElement = getStalePhysicianIds?.includes(4) ? "otherActivePhysician" : "activePhysicianIds";
          const insertforms = (activePhysicianIds?.includes(3) && value === 4 && checked) ? ["otherActivePhysician"]:
              ((value === 4 && checked) ? ["reCheckId", "otherActivePhysician"] : ["reCheckId"]);
  
          generateFormElements(insertedElement, insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
        }
      }

      if (value === 3) {
        const toBeDeletedForms = [
          "reCheckId", 
          "noReReasonIds",
          "otherNoReReason",
          "stoppedReReasonIds",
          "otherStoppedReReason",
          "clinicAmountId",
          "reDurationId"
        ];
        deleteFormElements(toBeDeletedForms);

        if (checked) {
          const insertforms = ["clinicAmountId", "reDurationId"];
          const insertedElement = getStalePhysicianIds?.includes(4) ? "otherActivePhysician" : "activePhysicianIds";
          generateFormElements(insertedElement, insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
        } else if (getStalePhysicianIds?.length > 0) {
          const insertforms = ["reCheckId"];
          const insertedElement = getStalePhysicianIds?.includes(4) ? "otherActivePhysician" : "activePhysicianIds";
          generateFormElements(insertedElement, insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
        }
      }
    }

    if (name === "reCheckId") {
      const deleteFormName = value === 1 ? ["noReReasonIds", "otherNoReReason"] : ["stoppedReReasonIds", "otherStoppedReReason"];
      deleteFormElements(deleteFormName);

      const formName = value === 1 ? "stoppedReReasonIds" : "noReReasonIds";
      generateFormElements("reCheckId", [formName], this.forms, this.onChanges.bind(this), insertedPosition);
    }

    if (name === "stoppedReReasonIds") {
      const deleteForms = ["otherStoppedReReason"];
      deleteFormElements(deleteForms);

      if (value === 14) {
        const insertforms = ["otherStoppedReReason"];
        generateFormElements("stoppedReReasonIds", insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
      }
    }

    if (name === "noReReasonIds") {
      const deleteForms = ["otherNoReReason"];
      deleteFormElements(deleteForms);

      if (value === 11) {
        const insertforms = ["otherNoReReason"];
        generateFormElements("noReReasonIds", insertforms, this.forms, this.onChanges.bind(this), insertedPosition);
      }
    }

    setState({ name, value, operator });
    this.callback();
  }
}