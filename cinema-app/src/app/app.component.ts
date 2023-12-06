import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {


  }
  title = 'cinema-app';

  

  

}

function ee():void{}

const [greeting]= 'helloWorld';
class MyClass3 {
  static greeting(){
    return 'hello world';
  }
 
}

class MyClass{
  public b: string='';

  public xFunction =() =>{

  }
}


class MyClass2{
  public bb: string='';

  public zFunction =() =>{

  }
}
interface point extends MyClass, MyClass2{
  x: string;
  y:string;

}

interface point3d extends point{
  z:string;
}