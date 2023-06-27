export class Styles {
  constructor() {
    this.style = "";
    this.initialize();
  }

  initialize() {
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    styleTag.innerHTML = `
        /* common class  */
        :root {
            --widget-white-color: #ffffff;
            --widget-black-color: #000000;
            --widget-error-color: #FF1F00;
            --widget-error-light-color: #FF0000;
            --widget-error-button-color: #731f4a47;
            --widget-button-color: #731F4A;
            --widget-button-text-color: #F0627F;
            --widget-gray-color: #515151;
            --widget-form-background: #EEE7E5;
            --widget-sign-up-title: #DED1CE;
        }

        .for-widget-container {
            position: fixed;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            gap: 25px;
            font-family: "Brandon Grotesque";
        }
        .for-widget-container * {
            box-sizing: border-box !important;
        }
        .widget-hidden {
            display: none;
        }

        .widget-icon, i {
            cursor: pointer;
        }

        .widget-text-input-container.widget-error > input.widget-text-input {
            outline: 2px solid var(--widget-error-color);
        }

        .widget-single-select-container.widget-error > .select-wrapper input.select-dropdown {
            border-top: 2px solid var(--widget-error-color);
            border-bottom: 2px solid var(--widget-error-color);
            border-left: 2px solid var(--widget-error-color);
        }
        
        .widget-single-select-container.widget-error > .select-wrapper input.select-dropdown ~ .caret {
            border-top: 2px solid var(--widget-error-color);
            border-bottom: 2px solid var(--widget-error-color);
            border-right: 2px solid var(--widget-error-color);
        }

        .widget-multi-select-container.widget-error [type="checkbox"].filled-in:not(:checked)+span:not(.lever)::after {
            border: 2px solid var(--widget-error-light-color);
        }

        .widget-form-radio-container.widget-error [type="radio"]:not(:checked)+span::before {
            border: 2px solid var(--widget-error-light-color);
        }

        .widget-form-button-container.widget-error > a.waves-effect.btn {
            background-color: var(--widget-error-button-color);
        }

        .widget-m-10 {
            margin: 10px;
        }

        /* font section */
        .widget-font-header-bold {
            font-size: 24px;
            font-weight: 500;
            line-height: 100%;
        }

        .widget-font-medium-light {
            font-size: 18px;
            font-weight: 400;
            line-height: 150%;
        }

        .widget-font-base-bold {
            font-size: 16px;
            font-weight: 500;
            line-height: 150%;
        }

        .widget-font-base-light {
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
        }

        .widget-font-white-color {
            color: var(--widget-white-color);
        }

        /* widget container */

        /* widget button class */
        .widget-button-container {
            position: relative;
            padding-left: 18px;
        }

        .widget-button-img {
            position: absolute;
            display: inline-block;
            left: 0;
            top: -6.5px;
        }

        .widget-button-img-collapsed {
            position: relative;
            display: inline-block;
            left: 0;
            top: -6.5px;
        }

        .widget-text {
            background-color: var(--widget-button-text-color);
            border: 1px solid gray;
            border-radius: 0 50px 50px 0;
            flex-direction: column;
            align-items: start;
            display: inline-flex;
            padding: 6px 20px 6px 60px;
            cursor: pointer;
        }

        .widget-close-icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            right: 0;
            top: -20px;
            color: var(--widget-gray-color)
        }

        /* form container class */
        .widget-form-container.card {
            width: 415px;
            height: 582px;
            margin: 0;
            visibility: hidden;
            opacity: 0;
            transition: all .3s linear;
            background-color: var(--widget-form-background);

            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            /* display: none; */
        }

        .widget-form-container.card::-webkit-scrollbar {
            display: none;
        }

        /* form header */
        .widget-sign-up-title {
            position: relative;
            text-align: center;
            z-index: 1;
        }
        .widget-sign-up-title::after {
            width: 300px;
            height: 20px;
            text-align: center;
            bottom: -8px;
            left: 50%;
            content: '';
            z-index: -1;
            position: absolute;
            transform: translateX(-50%) skew(20deg);
            background-color: var(--widget-sign-up-title);
            background-blend-mode: multiply;
        }

        .widget-sign-up-subtitle {
            display: inline-block;
            margin-top: 10px;
            text-align: center;
        }

        .card .widget-sign-up-form-header.card-content {
            padding: 20px 20px 15px 20px;
        }

        .card .widget-sign-up-form.card-content {
            padding: 0 20px 0 20px;
        }

        .widget-form-step-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            gap: 50px;
        }

        .widget-form-step {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--widget-button-color);
            background-color: var(--widget-white-color);
            color: var(--widget-black-color)
        }

        .widget-form-step:not(:last-of-type)::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 40px;
            height: 1px;
            right: -45px;
            background-color: var(--widget-black-color);
        }

        .widget-form-step-active {
            background-color: var(--widget-button-color);
            color: var(--widget-white-color)
        }

        .widget-form-step-span {
            color: inherit;
        }

        /* form elements */
        /* text input */
        .widget-text-input-container {
            margin-bottom: 10px;
        }

        .widget-text-input-container > input[type=text]:not(.browser-default),
        .widget-text-input-container > input[type=email]:not(.browser-default) {
            height: 50px;
            padding: 10px;
            border-bottom: none;
            background-color: var(--widget-white-color);
        }

        .widget-text-input-container > input[type=text]:not(.browser-default):focus:not([readonly]),
        .widget-text-input-container > input[type=email]:not(.browser-default):focus:not([readonly]) {
            border-bottom: none;
            box-shadow: none;
            outline: 1px solid var(--widget-button-color);
        }

        .widget-text-input-container > .widget-input-label {
            font-size: 16px;
            color: var(--widget-black-color);
        }

        .widget-text-input-container > input:-internal-autofill-selected {
            background-color: var(--widget-white-color);
        }

        /* single select */
        .widget-single-select-container.input-field {
            margin-bottom: 10px;
            display: flex;
            flex-direction: column-reverse;
        }

        .widget-single-select-container > .widget-select-label {
            font-size: 16px;
            position: relative;
            color: var(--widget-black-color);
            top: 0;
            transform: none;
        }

        .widget-single-select-container > .select-wrapper input.select-dropdown {
            height: 50px;
            width: calc(100% - 24px);
            padding: 10px;
            border-bottom: none;
            overflow-x: hidden;
            background-color: var(--widget-white-color);
        }
        
        .widget-single-select-container > .select-wrapper input.select-dropdown:focus {
            border-bottom: none;
            box-shadow: none;
            width: calc(100% - 24px);
            overflow-x: hidden;
            border-top: 1px solid var(--widget-button-color);
            border-bottom: 1px solid var(--widget-button-color);
            border-left: 1px solid var(--widget-button-color);
        }
        
        .widget-single-select-container > .select-wrapper input.select-dropdown:focus ~ .caret {
            border-top: 1px solid var(--widget-button-color);
            border-bottom: 1px solid var(--widget-button-color);
            border-right: 1px solid var(--widget-button-color);
        }

        .widget-single-select-container .dropdown-content li>a, 
        .widget-single-select-container .dropdown-content li>span {
            color: var(--widget-black-color);
            padding 10px 16px !important;
        }

        .widget-single-select-container .select-wrapper .caret {
            background-color: var(--widget-white-color);
            height: 50px;
            margin: 0;
        }

        .widget-single-select-container .select-wrapper .disabled.selected,
        .widget-single-select-container .select-dropdown li.disabled {
            display: none;
        }

        /* multi select */
        .widget-multi-select-container {
            margin-bottom: 10px;
        }

        .widget-multi-select-container label.widget-multi-select-label {
            color: var(--widget-black-color);
            margin-bottom: 10px;
            display: inline-block;
        }

        .widget-multi-select-container p label {
            color: var(--widget-black-color);
        }
        
        .widget-multi-select-container [type="checkbox"]+span:not(.lever) {
            font-size: 18px;
            line-height: 150%;
        }

        .widget-multi-select-container [type="checkbox"].filled-in:not(:checked)+span:not(.lever)::after,
        .widget-multi-select-container [type="checkbox"].filled-in:checked+span:not(.lever)::after {
            background-color: var(--widget-white-color);
            border: none;
            width: 26px;
            height: 26px;
        }

        .widget-multi-select-container [type="checkbox"].filled-in:checked+span:not(.lever)::before {
            border-bottom: 3px solid var(--widget-button-color);
            border-right: 3px solid var(--widget-button-color);
            width: 12px;
            height: 20px;
        }

        .card .card-content p.widget-mb-10 {
            margin: 0 0 10px 0;
        }

        /* form radio */
        .widget-form-radio-container {
            margin-bottom: 10px;
        }

        .widget-form-radio-container label.widget-form-radio-label {
            color: var(--widget-black-color);
            margin-bottom: 10px;
            display: inline-block;
        }

        .widget-form-radio-container p label {
            color: var(--widget-black-color);
        }

        .widget-form-radio-container [type="radio"]:not(:checked)+span::before, 
        .widget-form-radio-container [type="radio"]:not(:checked)+span::after {
            border: none;
            background-color: var(--widget-white-color);
        }

        .widget-form-radio-container [type="radio"]:checked+span::after, 
        .widget-form-radio-container [type="radio"].with-gap:checked+span::before, 
        .widget-form-radio-container [type="radio"].with-gap:checked+span::after {
            border: none;
        }

        .widget-form-radio-container [type="radio"]:checked+span::after,
        .widget-form-radio-container [type="radio"].with-gap:checked+span::after {
            background-color: var(--widget-button-color);
            border: 3px solid var(--widget-white-color);
            transform: none;
        }

        .widget-form-radio-container [type="radio"]:not(:checked)+span, 
        .widget-form-radio-container [type="radio"]:checked+span {
            font-size: 18px;
            line-height: 150%;
            padding-left: 40px;
        }

        .widget-form-radio-container [type="radio"]+span::before, 
        .widget-form-radio-container [type="radio"]+span::after {
            width: 26px;
            height: 26px;
        }

        /* form button */
        .widget-form-button-container {
            margin-bottom: 20px;
            margin-top: 10px;
        }

        .widget-form-button-container > a.waves-effect.btn {
            display: block;
            background-color: var(--widget-button-color);
            padding: 7px 16px;
            height: 50px;
            font-size: 16px;
        }

        /* form footer */
        .card .card-content.widget-form-footer {
            padding: 0 20px 0px 20px;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 480px) {
            .for-widget-container {
              right: 5px !important;
            }
            .widget-form-container.card {
                width: calc(100% - 5px);
            }
        }
    `;
  }
}
