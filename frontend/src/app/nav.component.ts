import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
  	<mat-toolbar color="primary">
      Message Board
      <button mat-button routerLink="/message"></button>
    </mat-toolbar>
  `,
})
export class NavComponent {
  constructor(){}

}