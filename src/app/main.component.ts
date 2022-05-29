import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `<mat-card>
    <nav>
      <ul>
        <li><a mat-button routerLink="/carriages">
            <b>Carriages</b>
          </a></li>
           <li><a mat-button routerLink="/sites">
            <b>Sites</b>
          </a></li>
      </ul>
    </nav>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MainComponent  { }
