import { InjectionToken, Type } from '@angular/core';

export enum DialogType {
    Alert,
    Confirm,
    Custom
}

export class DialogOptions {
    title?: string;
    data?: Object;
    content?: any;
    dialogType?: DialogType;
    component?: Type<Object>;
    close?: (success: boolean) => void | undefined;
}

export interface DialogOptionsContent {
    title: string;
    data?: Object;
    content?: any;
    close?: (success: boolean) => void | undefined;
}


export interface IAlertDialog extends DialogOptionsContent {
}

export interface IConfirmDialog extends DialogOptionsContent {
}

export interface IDialogResult {
    data?: Object;
    close?: (success: boolean) => void;
}

export class AOptions {
    public text: string | undefined;
}

export const DIALOG_OPTIONS_CONTENT = new InjectionToken<DialogOptionsContent>('dialog.options.content');

