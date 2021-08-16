import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.page.html',
  styleUrls: ['./registrations.page.scss'],
})
export class RegistrationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: object){
    this.router.navigateByUrl('/registration-thankyou');
  }

}
