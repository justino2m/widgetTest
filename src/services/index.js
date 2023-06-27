import { TextInput } from "../components/textInput";
import { SingleSelect } from "../components/singleSelect";
import { MultiSelect } from "../components/multiSelect";
import { RadioInput } from "../components/radio";

const state = {};

/**
 * Handle the "push" operation in the state for a particular key
 * @param {string} name - The key of the state
 * @param {any} value - The value to be added to or removed from the state array
 */
const handleArrayUpdate = (name, value) => {
  // If state[name] is not an array, set it to an array containing the value
  if (!Array.isArray(state[name])) {
    state[name] = [value];
    return;
  }

  // If state[name] does not include the value, add it
  if (!state[name].includes(value)) {
    state[name].push(value);
  } else {
    // If state[name] includes the value, remove it
    state[name] = state[name].filter((item) => item !== value);
  }
}

/**
 * Set the value of a key in the state object based on provided operator
 * @param {string} name - The key of the state
 * @param {any} value - The value to be set or added to the state
 * @param {string} operator - The operator to decide how to set the value ("update" or "push")
 */
const setState = ({ name, value, operator = "update" }) => {
  if (!name || value === undefined) {
    return;
  }

  if (operator === "update") {
    state[name] = value;
    return;
  }

  if (operator !== "push") {
    return;
  }

  handleArrayUpdate(name, value);
}

const getState = (name) => {
  return name ? state[name] : state;
}

const deleteState = (name) => {
  try {
    delete state[name];
  } catch (error) {
    console.log("unable to delete state.")
  }
}

const buildContent = (container, contents) => {
  if (container === null || contents?.length <= 0) {
    return;
  }

  contents.forEach((content) => {
    const { tag, classes, contentType, html, children } = content;
    const element = document.createElement(tag);
    element.classList.add(...classes);

    if (html && contentType) {
      element[contentType] = html;
    }
    if (children?.length > 0) {
      this.buildContent(element, children);
    }

    container.appendChild(element);
  });
};

const generateFormElements = (element, insertforms, forms, callback, position) => {
  if (!element || !insertforms) {
    return;
  }

  if (!Array.isArray(insertforms)) {
    insertforms = [insertforms];
  }
  
  const ele = typeof element === "string" ? 
    document.querySelector(`.widget-${element}`) : element;

  insertforms.forEach((formName) => {
    let formInput = null;
    const form = forms.find(form => form.name === formName);
    const props = {
      ...form, 
      onChange: (name, value, checked) => callback(name, value, form.operator, checked)
    };

    if (form.type === "text" || form.type === "email") {
      formInput = new TextInput(props);
    } else if (form.type === "singleSelect") {
      formInput = new SingleSelect(props);
    } else if (form.type === "multiSelect") {
      formInput = new MultiSelect(props);
    } else if (form.type === "radio") {
      formInput = new RadioInput(props);
    }

    ele.insertAdjacentElement(position, formInput.html);
  });
}

const deleteFormElements = (deleteForms) => {
  if (!Array.isArray(deleteForms)) {
    deleteForms = [deleteForms];
  }

  deleteForms.forEach((deleteFormName) => {
    const deleteFormElement = document.querySelector(`.widget-${deleteFormName}`);
    if (deleteFormElement) {
      deleteState(deleteFormName);
      deleteFormElement.parentNode.removeChild(deleteFormElement);
    }
  });
}

export { 
  buildContent,
  setState,
  getState,
  deleteFormElements,
  generateFormElements
}