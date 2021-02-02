import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogRoutes } from './dialog.router';
import { DialogComponent } from './dialog.component';
import { DialogService } from './services/dialog.service';
import { PopupComponent } from './components/popup/popup.component';
import { AlertDialogComponent } from './components/alert/alert-dialog.component';
import { ConfirmDialogComponent } from './components/confirm/confirm-dialog.component';
import { MaterialModule } from 'src/app/material/materials.module';
import { UsersComponent } from './components/users/users.component';
import { DialogActionsComponent } from './components/dialog-actions/dialog-actions.component';
import { UsersService } from './services/users.service';
import { DialogTitleComponent } from './components/dialog-title/dialog-title.component';

@NgModule({
    declarations: [
        DialogComponent,
        PopupComponent,
        AlertDialogComponent,
        ConfirmDialogComponent,
        UsersComponent,
        DialogActionsComponent,
        DialogTitleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(DialogRoutes),
        MaterialModule
    ],
    providers: [
        DialogService,
        UsersService
    ]
})

export class DialogModule { }
