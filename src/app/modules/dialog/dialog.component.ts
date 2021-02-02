import { Component, OnDestroy, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { UsersComponent } from "./components/users/users.component";
import { DialogService } from "./services/dialog.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(private dialogService: DialogService) {
    super();
  }

  ngOnInit(): void {
  }

  openCustomDialog() {
    const title = 'Users List';
    const dialogRef = this.dialogService.openDialog(UsersComponent, {}, title);
    dialogRef.afterClosed().subscribe(result => {
      this.displayResonse(result);
    });
  }

  openAlertDialog() {
    const content = 'Alert dialog. Click close or any where outside the dialog to see the response';
    const dialogRef = this.dialogService.openAlertDialog(content);
    dialogRef.afterClosed().subscribe(result => {
      this.displayResonse(result);
    });
  }

  openConfirmDialog() {
    const content = 'Confirm dialog. Click close or cancel or anywhere outside the dialog to see the response';
    const dialogRef = this.dialogService.openConfirmDialog(content);
    dialogRef.afterClosed().subscribe(result => {
      this.displayResonse(result);
    });
  }

  private displayResonse(result: boolean | undefined) {
    const message = result ? 'You clicked Ok' : 'You clicked cancel';
    window.alert(message);
  }
}