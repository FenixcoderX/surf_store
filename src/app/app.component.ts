// Main (root) component of the application

import { Component } from '@angular/core';

// Component decorator that specifies the selector (name of the component in HTML), template and style URLs for the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Class for the component that defines the properties and methods of the component
export class AppComponent {
  title = 'surf-store';

  // Method that is called when the component is initialized
  ngOnInit(): void {
    //localStorage.removeItem('cartProducts');
  }
}
