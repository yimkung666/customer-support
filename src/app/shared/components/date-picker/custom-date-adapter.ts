import { NativeDateAdapter } from '@angular/material/core';
import { parse, format as dateFnsFormat } from 'date-fns';

export class CustomDateAdapter extends NativeDateAdapter {
    readonly DT_FORMAT = 'dd/MM/yyyy';

    override parse(value: string | null): Date | null {
        if (value) {
            value = value.trim();
            if (!value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
                return new Date(NaN);
            }
            return parse(value, this.DT_FORMAT, new Date())
        }
        return null;
    }
    
    override format(date: Date, displayFormat: Object): string {
        return dateFnsFormat(date, this.DT_FORMAT)
    }
}