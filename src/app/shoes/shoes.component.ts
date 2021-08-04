import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit{

name: string = 'JUAN';
lastname: string = 'PEREZ'
age: number = 20;
birthdate: Date = new Date();
married: boolean = true;

constructor(){

}

ngOnInit(){

}

getFullName(): string{
  return `${this.name} ${this.lastname}`;
}

get fullName(): string{
  return `${this.name} ${this.lastname}`;
}

changeName(){
  this.name = 'PEDRO';
}

}
