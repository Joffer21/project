import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Robert';

  userData = {
    email: 'exemplo@exemplo.com',
    role: 'admin',
  }

  title = 'project';
}
