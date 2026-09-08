import { mount } from "svelte";
import ActionApp from "./ActionApp.svelte";

const app = mount(ActionApp, { target: document.getElementById("app")! });

export default app;