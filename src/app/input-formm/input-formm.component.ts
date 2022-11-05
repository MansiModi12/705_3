import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-input-formm',
  templateUrl: './input-formm.component.html',
  styleUrls: ['./input-formm.component.css']
})
export class InputFormmComponent implements OnInit {

  User=new User();
  UserForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.User);
  }

}
