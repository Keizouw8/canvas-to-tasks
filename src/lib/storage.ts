const SETTINGS_KEY = "settings";

const defaultSettings: Settings = {  
    canvasURL: "",
    canvasToken: ""
};

export async function getSettings(): Promise<Settings> {
	const result = await browser.storage.sync.get([SETTINGS_KEY]);
	return result[SETTINGS_KEY] ?? defaultSettings;
}

export async function setSettings(settings: Settings): Promise<void> {
	await browser.storage.sync.set({ [SETTINGS_KEY]: settings });
}