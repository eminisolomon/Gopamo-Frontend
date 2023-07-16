import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toast: NgToastService) { }


    success = (msg: string) => {
        this.toast.success({ detail: 'Success', summary: msg, duration: 2500 })
    }

    warn = (msg: string) => {
        this.toast.warning({ detail: 'Warning', summary: msg, duration: 2500 })
    }

    info = (msg: string) => {
        this.toast.info({ detail: 'Info', summary: msg, duration: 2500 })
    }

    error = (msg: string) => {
        this.toast.error({ detail: 'Error', summary: msg, duration: 2500 })
    }

}