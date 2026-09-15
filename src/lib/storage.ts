const SETTINGS_KEY = "settings";

export const defaultSettings: Settings = {  
    canvasURL: "",
    canvasToken: ""
};

export async function getSettings(): Promise<Settings> {
	const result = await browser.storage.sync.get({ settings: defaultSettings });
	return result[SETTINGS_KEY];
}

export async function setSettings(settings: Settings): Promise<void> {
	await browser.storage.sync.set({ [SETTINGS_KEY]: settings });
}