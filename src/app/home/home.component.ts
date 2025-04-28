import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';




@Component({
  selector: 'app-home',
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  constructor(private router:Router, private route:ActivatedRoute){}
  logOut(){
    this.router.navigate([''])
  }

}
