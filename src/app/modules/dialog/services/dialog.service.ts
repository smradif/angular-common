import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { AlertDialogComponent } from "../components/alert/alert-dialog.component";
import { ConfirmDialogComponent } from "../components/confirm/confirm-dialog.component";
import { PopupComponent } from "../components/popup/popup.component";
import { DialogType } from "../models/dialog.model";

@Injectable()
export class DialogService {
    constructor(private dialog: MatDialog) {
    }

    public openDialog<T>(component: ComponentType<Object>, item?: T, title?: string): MatDialogRef<Object> {
        const config = {
            data: {
                title,
                item,
                component,
                dialogType: DialogType.Custom,
                close: (success: boolean) => { dialogRef.close(success); }
            },
            disableClose: true,
        };
        const dialogRef = this.open(PopupComponent, config);
        return dialogRef;
    }

    public openAlertDialog(content: string, title: string = 'Alert'): MatDialogRef<Object> {
        const config = {
            data: {
                title,
                component: AlertDialogComponent,
                content,
                dialogType: DialogType.Alert,
                close: (success: boolean) => { dialogRef.close(success); }
            }
        };
        const dialogRef = this.open(PopupComponent, config);
        return dialogRef;
    }

    public openConfirmDialog(content: string, title: string = 'Confirm'): MatDialogRef<Object> {
        const config = {
            data: {
                title,
                component: ConfirmDialogComponent,
                content,
                dialogType: DialogType.Confirm,
                close: (success: boolean) => { dialogRef.close(success); }
            }
        };
        const dialogRef = this.open(PopupComponent, config);
        return dialogRef;
    }

    private open(
        component: ComponentType<Object>,
        defaultConfig?: MatDialogConfig<Object>,
        customConfig: MatDialogConfig<Object> = { panelClass: 'dialog-styles' }): MatDialogRef<Object> {
        const dialogRef = this.dialog.open(component, { ...defaultConfig, ...customConfig });
        return dialogRef;
    }
}