import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogRoutes } from './dynamic.router';
import { MaterialModule } from 'src/app/material/materials.module';
import { DynamicService } from './services/dynamic.service';
import { DynamicComponent } from './dynamic.component';
import { MercedesComponent } from './components/mercedes/mercede.scomponent';
import { TeslaComponent } from './components/tesla/tesla.component';
import { RangeRoverComponent } from './components/range-rover/range-rover.component';

@NgModule({
    declarations: [
       DynamicComponent,
       MercedesComponent,
       TeslaComponent,
       RangeRoverComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DialogRoutes),
        MaterialModule
    ],
    providers: [
        DynamicService
    ]
})

export class DynamicModule { }
