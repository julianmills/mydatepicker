import {Component, ViewEncapsulation} from '@angular/core';

declare var require: any;
const appStyles: string = require('./sample-date-picker-app.css');
const myDatePickerStyles: string = require('../src/my-date-picker/my-date-picker.component.css');
const appTemplate: string = require('./sample-date-picker-app.html');

@Component({
    selector: 'mydatepicker-app',
    styles: [appStyles, myDatePickerStyles],
    template: appTemplate,
    encapsulation : ViewEncapsulation.None
})

export class MyDatePickerApp {

    constructor() {
        console.log('constructor: MyDatePickerApp');
    }

}
