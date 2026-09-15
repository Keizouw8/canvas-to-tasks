<script lang="ts">
    import { defaultSettings } from "../lib/storage";
	let settings: Settings = $state(defaultSettings);
	getSettings();

	$effect(() => { chrome.runtime.sendMessage({ event: "setSettings", payload: settings }) });

	async function getSettings(){
		settings = await chrome.runtime.sendMessage({ event: "getSettings" })
	}
</script>
<h1>Canvas to tasks</h1>
<span>Canvas URL</span>
<input type="text" placeholder="https://<school>.instructure.com" bind:value={settings.canvasURL}>
<span>Canvas Access Token</span>
<input type="text" placeholder="<Access Token>" bind:value={settings.canvasToken}>
<style></style>