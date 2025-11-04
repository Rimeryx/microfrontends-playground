import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

const lifecycles = singleSpaVue({
  createApp,
  appOptions: { render() { return h(Root); } },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
