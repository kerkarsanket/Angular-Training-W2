import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public interpol = "Interpolation"
  public myId="testId";
  public isDisabled=true;
  public successText="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-failure": this.hasError,
    "text-special": this.isSpecial
  }

  public greeting = "";
  public inLineEvent = "";

  public twoWayBind = "";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Function called";
  }

  onClick(event){
    console.log(event);
    this.greeting = "This is example of Event Binding";
  }

}