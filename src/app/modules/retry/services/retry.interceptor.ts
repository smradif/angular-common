import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, Optional, Self } from "@angular/core";
import { Observable } from "rxjs";
import { DomainRetryLimit, DOMAIN_RETRIES, RETRIES } from "../models";

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

    constructor(
        @Self() client: HttpClient, // Self make sure HttpClient is injected IN THIS module
        @Inject(RETRIES) private retries: number,
        @Optional() @Inject(DOMAIN_RETRIES) domianRetries: DomainRetryLimit[]) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }
}