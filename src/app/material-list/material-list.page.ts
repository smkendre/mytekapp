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
  userRole: any;
  constructor(
    private router: Router,
    private tenderService: TendersService,
    private storageService: StorageService
   ) { }


   ngOnInit() {}
   ionViewWillEnter() {
         this.isLoading = true;


    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){

        if(res.status == 2) {
          this.router.navigate(['registration']);

        }

        this.accessToken = res.token;
        this.userId = res.id;
        this.userRole = res.role;



  this.tenderService.getMaterialRequests(this.userId, this.userRole, this.accessToken).subscribe((response) => {
    this.isLoading = false;

    if(response.status == 'success')
    this.Requests = response.data;

  });
      }else{
        this.router.navigate(['auth']);
      }
    });
  }
}
