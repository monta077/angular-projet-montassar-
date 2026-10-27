import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nom ="ons";
  imgurl="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail"

  bonjour() {alert('Bonjour ');}


  nom1="amen"

  students=["Ahmed","Ali","Amine","Aymen","Anis"]
  students2=[
    {name:"Ahmed",age:20},
    {name:"Ali",age:21},
    {name:"Amine",age:22},
    {name:"Aymen",age:23},
    {name:"Anis",age:24}
  ]

//
count=0;
//signal
counts=signal(0);

incrementSimple(){
  this.count++;
}
///signal
increment() {
    this.counts.update(v => v + 1);
  }
}
