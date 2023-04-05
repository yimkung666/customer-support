export default class ValidatorUtility {
    static TH_PHONE_REGEX = /^((08|09|06)([0-9]{8})|(0[23457])([0-9]{7}))$/;
    static EMAIL_PATTERN = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/;

    static isEmail(email: string) {
        if (!email || !this.EMAIL_PATTERN.test(email))
            return false;
        return true;
    }

    static isPhoneNumber(phoneNumber: string) {
        if (!phoneNumber || !this.TH_PHONE_REGEX.test(phoneNumber)) {
            return false;
        }
        return true;
    }

    /**
     * 
     * @param dateStr accept only DD/MM/YYYY format
     * @returns 
     */
    static dateIsValid(dateStr: string) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;

        if (dateStr.match(regex) === null) {
            return false;
        }

        const [day, month, year] = dateStr.split('/');

        // format as `yyyy-mm-dd`
        const isoFormattedStr = `${year}-${month}-${day}`;
        const date = new Date(isoFormattedStr);
        const timestamp = date.getTime();

        if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
            return false;
        }

        return date.toISOString().startsWith(isoFormattedStr);
    }

    static parseStringToDate(dateStr: string) {
        if (!this.dateIsValid(dateStr))
            return new Date();

        const [day, month, year] = dateStr.split('/');

        // format as `yyyy-mm-dd`
        const isoFormattedStr = `${year}-${month}-${day}`;
        const date = new Date(isoFormattedStr);
        return date;
    }

    /**
     * 
     * @param dateStartStr accept only DD/MM/YYYY format
     * @param dateEndStr accept only DD/MM/YYYY format
     * @returns 
     */
    static validDateLength(dateStartStr: string, dateEndStr: string) {

        if (!this.dateIsValid(dateStartStr) || !this.dateIsValid(dateEndStr)) //start date or end date are invalid format
            return false;

        const [sDay, sMonth, sYear] = dateStartStr.split('/');
        const startDate = new Date(`${sYear}-${sMonth}-${sDay}`);

        const [eDay, eMonth, eYear] = dateEndStr.split('/');
        const endDate = new Date(`${eYear}-${eMonth}-${eDay}`);

        return endDate.getTime() >= startDate.getTime();

    }
}
