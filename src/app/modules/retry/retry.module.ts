import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/materials.module';
import { RetryComponent } from './retry.component';
import { DOMAIN_RETRIES } from './models/retry.model';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryInterceptor } from './services/retry.interceptor';

@NgModule({
    declarations: [
        RetryComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
    ]
})

export class RetryModule { 
    static customizeDomiain(domain: string, retries: number): ModuleWithProviders<any> {
        return {
            ngModule: RetryModule,
            providers: [
                { provide: DOMAIN_RETRIES, useValue: {domain, retries}, multi: true }
            ]
        }
    }
}
