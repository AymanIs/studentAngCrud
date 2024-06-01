import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'studentCrud';

  
  constructor(){

  }

  ngOnInit(): void {
    
  }
  openModel(){
    const model = document.getElementById('myModel');
    if( model != null){
      model.style.display='block';
    }
  }

  closeModel(){
    const model = document.getElementById('myModel');
    if(model != null){
      model.style.display='none'
    }
  }
}
