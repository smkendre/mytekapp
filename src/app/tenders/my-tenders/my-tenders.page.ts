import { Component, OnInit } from '@angular/core';
import { TendersService } from '../../services/tenders.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constant';


@Component({
  selector: 'app-my-tenders',
  templateUrl: './my-tenders.page.html',
  styleUrls: ['./my-tenders.page.scss'],
})
export class MyTendersPage implements OnInit {
  Tenders : any = [];
  accessToken: any;
  userId: string;
  userRole: any;
  isLoading = false;
  constructor(private tenderService: TendersService,private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

      if(res.status == 2) {
        this.router.navigate(['registration']);

      }

        this.accessToken = res.token;
        this.userId = res.id;
        this.userRole = res.role;

        this.tenderService.getMyTenders(this.userId, this.userRole, this.accessToken).subscribe((response) => {
          this.isLoading = false;

          if(response.status == 'success')
          this.Tenders = response.data;

        });
      }else{
        this.router.navigate(['auth']);
      }
    });
  }


}
