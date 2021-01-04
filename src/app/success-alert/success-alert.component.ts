import { Component } from '@angular/core';

@Component({
    selector:'app-success-alert',
    template: `
        <p> Succeed! </p>
    `,
    styles: [
        `
        p {
            padding: 15px;
            background-color: greenyellow;
            border: 1px solid green;
        }
        `
    ]
})
export class SuccessAlertComponent {}