import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.page.html',
  styleUrls: ['./material-list.page.scss'],
})
export class MaterialListPage implements OnInit {
  Requests = [];
  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.isLoading = true;
    this.Requests = [
      {
      id: 1,
      name: 'Tender 5',
      material: 'copper wire',
      quantity: '1000 mtr',
      status: 'Approved'
    },{
      id: 2,
      name: 'Tender 6',
      material: 'Cement',
      quantity: '10 KG',
      status: 'Pending'
    }
  ];

  this.isLoading = false;
  }

  submitRequest(form: object){
    this.router.navigateByUrl('/home');
  }
}
