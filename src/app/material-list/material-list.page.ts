import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constant';
import { StorageService } from 'src/app/services/storage.service';
import { TendersService } from 'src/app/services/tenders.service';
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.page.html',
  styleUrls: ['./material-list.page.scss'],
})
export class MaterialListPage implements OnInit {
  Requests = [];
  isLoading = false;
  accessToken: string;
  userId: string;

  constructor(
    private router: Router,
    private tenderService: TendersService,
    private storageService: StorageService
   ) { }

  ngOnInit() {


    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){
        this.accessToken = res.token;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });
  }


  ionViewWillEnter(){
    this.isLoading = true;


  this.tenderService.getMaterialRequests(this.userId, this.accessToken).subscribe((response) => {
    this.isLoading = false;

    if(response.status == 'success')
    this.Requests = response.data;

  });
  //   this.Requests = [
  //     {
  //     id: 1,
  //     name: 'Tender 5',
  //     material: 'copper wire',
  //     quantity: '1000 mtr',
  //     status: 'Approved'
  //   },{
  //     id: 2,
  //     name: 'Tender 6',
  //     material: 'Cement',
  //     quantity: '10 KG',
  //     status: 'Pending'
  //   }
  // ];

  // this.isLoading = false;
  }



  // submitRequest(form: object){
  //   this.router.navigateByUrl('/home');
  // }
}
