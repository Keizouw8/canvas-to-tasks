console.log('[From the page context] Hello from content_scripts!');

export default function initial() {
	console.log("here");
	return () => {}
}