import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { 
  password: string='';
  length: number=0;
  includeNumber: boolean=false;
  includeLetter: boolean=false;
  includeSymbole: boolean=false;
  onChangeNumber(){
    this.includeNumber=!this.includeNumber;
  }
  onChangeLetter(){
    this.includeLetter=!this.includeLetter;
  }
  onChangeSymbole(){
    this.includeSymbole=!this.includeSymbole;
  }
  onClickGenerator(){
    // console.log(this.includeNumber);
    // console.log(this.includeLetter);
    // console.log(this.includeSymbole);
    const numbers='0123456789';
    const letters='zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    const symboles='!@#$%^&*()_+';

    let validChar='';
    if(this.includeNumber){
      validChar+=numbers;
    }
    if(this.includeLetter){
      validChar+=letters;
    }
    if(this.includeSymbole){
      validChar+=symboles;
    }
let generatePassword='';
    for (let index = 0; index < this.length; index++) {
      let randomIndex= Math.floor(Math.random()*validChar.length);
      generatePassword +=validChar[randomIndex];
    }
this.password=generatePassword;
  }  
  getLength(value: string){
    let parseValue: number=0;
    if(value)
    if(parseInt(value)!=null){
      parseValue= parseInt(value);
    }
    else
    {
      parseValue=0;
    }
    if(!isNaN(parseValue)){
      this.length=parseValue;
    }
  }
}
