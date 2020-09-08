import Vue from "vue";

import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

//Import all rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

//Registering all global component
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

//Default interaction mode
setInteractionMode("eager");
