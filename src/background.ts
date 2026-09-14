import sync from "./events/sync";
import { getSettings, setSettings } from "./lib/storage";

const events: { [key: string]: Function } = { sync, getSettings, setSettings };

chrome.runtime.onMessage.addListener(async function ({ event, payload }: Message, sender, sendResponse) {
	if (event in events) sendResponse(await events[event](payload));
	return true;
});