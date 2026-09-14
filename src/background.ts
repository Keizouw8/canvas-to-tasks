const SETTINGS_KEY = "settings";

chrome.runtime.onMessage.addListener(async function ({ event, payload }: Message, sender, sendResponse) {
	if (event == "sync") {
		sendResponse(await sync());
		return true;
	}
});

async function sync() {
	// Sync Canvas assignments to Google tasks here
    await new Promise(resolve => setTimeout(resolve, 3000));
	return { success: true };
}