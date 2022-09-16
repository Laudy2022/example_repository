import { Component, OnInit } from '@angular/core';
import User from 'src/User';
// inside of this file there is a type that isn't User or User[]
@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-liost.component.css']
})
export class UserListComponent implements OnInit {
    constructor() { }
    // void below is thee return type of the method
      //notice the placement in relevance to the parentheses
    ngOnInit(): void {
    }
    // type for param is inside of the quote
    //return type is right after parenthese with our params and before the curly bracket
    sayHello(name: string): string {
        return 'hello' + name;
    }
    users: User[] = [ // variableName: type[] 
    {
        firstName: 'Kim',
        lastName: 'Latondress',
        age: 32,
        sex: 'female',
    },
    {
        firstName: 'Seth',
        lastName: 'Rogan',
        age: 45,
        sex: 'male',
    }
];
}