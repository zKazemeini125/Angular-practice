import { faker } from '@faker-js/faker';
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
  title = 'TypingChallenge';
  randomText: string= faker.lorem.sentence();
  inputText:string=''

  onChangeInput(text:string){
    this.inputText=text;
  }
  
  comper(letterRandom:string, letterInput:string):string{
    if(!letterInput){
      return 'pending';
    }
    return letterRandom===letterInput? 'correct':'incorrect';
  }
}
