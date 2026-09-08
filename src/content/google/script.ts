import { mount, unmount } from "svelte"
import GoogleApp from "./GoogleApp.svelte"
import "./style.css"

console.log("[From the page context] Hello from content_scripts!");

export default function initial() {
	const rootDiv = document.createElement("div");
	
	rootDiv.setAttribute("data-extension-root", "true");
	rootDiv.style.cssText = "all: initial !important";
	document.body.appendChild(rootDiv);
	
	const shadowRoot = rootDiv.attachShadow({ mode: "open" });
	
	const styleElement = document.createElement("style");
	shadowRoot.appendChild(styleElement);
	
	fetchCSS().then((response) => (styleElement.textContent = response));
	
	const contentDiv = document.createElement("div");
	contentDiv.className = "calendar_script";
	shadowRoot.appendChild(contentDiv);
	
	const app = mount(GoogleApp, { target: contentDiv })
	return () => {
		unmount(app);
		rootDiv.remove();
	}
}

async function fetchCSS() {
	const cssUrl = new URL("./style.css", import.meta.url)
	const response = await fetch(cssUrl)
	const text = await response.text()
	return response.ok ? text : Promise.reject(text)
}