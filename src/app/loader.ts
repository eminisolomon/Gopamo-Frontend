import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoaderResolver implements Resolve<boolean> {
    constructor(private spinnerService: NgxSpinnerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.spinnerService.show();

        return new Observable<boolean>(observer => {
            setTimeout(() => {
                this.spinnerService.hide();
                observer.next(true);
                observer.complete();
            }, 500);
        });
    }
}