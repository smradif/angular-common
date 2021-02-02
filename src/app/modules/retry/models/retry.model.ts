import { InjectionToken, Type } from '@angular/core';

export const API_URL = new InjectionToken<string>('API endpoint URL');
export const RETRIES = new InjectionToken<number>('Default numbe of retries');

export interface DomainRetryLimit {
    domain: string;
    retries: number;
}

export const DOMAIN_RETRIES = new InjectionToken<DomainRetryLimit>('Retries per domain');