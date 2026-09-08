<script lang="ts">
	import "@fontsource/roboto";
	
	let syncing = $state(false);
	
	async function sync(){
		syncing = true;
		let { success } = await chrome.runtime.sendMessage({ event: "sync" });
		if(!success) alert("Sync failed");
		syncing = false;
	}
</script>

<button id="sync" onclick={sync} class={syncing ? "busy" : ""} disabled={syncing}>
	<img class={syncing ? "spinner" : ""} src="https://www.wabash.edu/images2/technology/canvas.png" alt="canvas logo">
	<span>{syncing ? "Syncing" : "Sync"}</span>
</button>