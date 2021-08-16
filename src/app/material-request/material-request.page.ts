import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-request',
  templateUrl: './material-request.page.html',
  styleUrls: ['./material-request.page.scss'],
})
export class MaterialRequestPage implements OnInit {
  isLoading = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }



  onSubmit(form: object){
      this.router.navigateByUrl('/material-request-list');
  }
}
