import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'millisToMin'
})

export class AlbumPipes implements PipeTransform {
    transform(value: number, args: any[]): string {
        let val = Math.round(value/60000);
        return (val>1) ? (val + " minutes") : (val + " minute");
    }
}