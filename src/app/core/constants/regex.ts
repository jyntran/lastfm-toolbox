export class Regex {
	public static plaintext = /\s*\d{1,2}\:\d{2}\s*(\n?)/;
	public static plaintextTrack = /^(\d+)\s*(?:.-?)\s*(.*)$/;
	
	public static domain = /^(?:https?:\/\/)((?:[a-z0-9-_]+\.)*[a-z0-9-_]+\.?)(.*)$/i;
	public static itunes = /^(?:https?:\/\/)?((?:[a-z0-9-_]+\.)*[a-z0-9-_]+\.?)(\/)([a-z]{2})(.*)\/[a-z]*([0-9]*)\??.*$/i;
	public static vgmdb = /^(?:https?:\/\/)?((?:[a-z0-9-_]+\.)*[a-z0-9-_]+\.?)(\/)(.*)(\/)(.*)$/i;
}