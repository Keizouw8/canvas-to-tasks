import getSettings from "./events/getSettings";
import setSettings from "./events/setSettings";
import sync from "./events/sync";

chrome.runtime.onMessage.addListener(async function ({ event, payload }: Message, sender, sendResponse) {
    if (event == "sync") sendResponse(await sync());
    if (event == "getSettings") sendResponse(await getSettings());
	if (event == "setSettings") sendResponse(await setSettings(payload));
	return true;
});