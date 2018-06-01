import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;

  sayHi(): string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const customer: Person = {
      firstName: 'My Name ',
      lastName: 'Jeff',
      sayHi: () => {
        console.log(5 + 5);
        return 'Hi';
      }
    }
    console.log(customer.sayHi());

    const employee: Person = {
      firstName: 'Dude',
      lastName: 'Awesome',
      sayHi: () => {
        return 'Hello';
      }
    }
    console.log(employee.sayHi());
  }
}
