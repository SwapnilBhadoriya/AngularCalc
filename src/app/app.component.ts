import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  val = '';

  appendexp(event:any){

    this.val += (event.currentTarget.value);
    // console.log(event.currentTarget);
  }

  res(){
    if(this.val === ''){
      return ;
    }
    try {
      // Evaluate the expression using the JavaScript eval() function
      this.val = eval(this.val);
    } catch (error) {
      // If there is an error, show an error message
      this.val = 'Error: Invalid expression';
    }
    this.val = this.val.toString();
  }
 
  backspace(){
    if(this.val !== ''){
    this.val = this.val.slice(0,this.val.length-1);
    }
  }

  clear(){
    this.val = "";
  }
}
