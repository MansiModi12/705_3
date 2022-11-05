import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-type',
  templateUrl: './data-type.component.html',
  styleUrls: ['./data-type.component.css']
})
export class DataTypeComponent implements OnInit {
RollNo:Number=13;
Name:String="Mansi Modi";
DOB=new Date('2001-12-08');
arr:Array<any>=['mansi',13];
value!:String;  
options:Array<any>=['textbox','textarea'];

  constructor() { }

  ngOnInit(): void {
  }

  ChangeEvent(event:any){
    const value=event.target.value;
    this.value=value;
    console.log(value);
  }

}
