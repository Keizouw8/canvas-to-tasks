type Message = {
	event: string;
	payload: any;
}

chrome.runtime.onMessage.addListener(async function ({ event, payload }: Message, sender, sendResponse) {
	if (event == "sync") {
		sendResponse(await sync());
		return true;
	}
});

async function sync() {
	// Sync Canvas assignments to Google tasks here
	return { success: true };
}