import { FORWidget } from "./for-widget.js";
import CONSTANT from "./constant.js";

console.log(">>process.env.SIGNUP_URL", process.env.SIGNUP_URL);
const forWidget = new FORWidget({
  position: CONSTANT.POSITION,
  vertical: CONSTANT.VERTICAL,
  horizontal: CONSTANT.HORIZONTAL,
  widgetPrefixText: CONSTANT.WIDGET_PREFIX_TEXT,
  widgetCoach: CONSTANT.WIDGET_COACH,
  collapsed: CONSTANT.COLLAPSED,
  form: CONSTANT.FORM,
});
