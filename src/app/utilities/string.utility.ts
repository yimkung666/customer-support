export default class StringUtility {
    static trim(str: string) {
        return str ? this.normalize(str.trim()) : '';
    }

    static normalize(str: string) {
        return str.replace(/\u200B/g, '');
    }

}
