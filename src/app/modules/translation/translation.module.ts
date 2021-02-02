import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationRoutes } from './translation.router';
import { MaterialModule } from 'src/app/material/materials.module';
import { TranslationComponent } from './translation.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
    }

@NgModule({
    declarations: [
        TranslationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(TranslationRoutes),
        MaterialModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
       
    ]
})

export class TranslationModule { }
