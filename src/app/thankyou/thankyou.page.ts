import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  userStatus: any;
  isLoading = true;
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {


    this.storageService.get(AuthConstants.AUTH).then(res => {
        console.log(res.status);

      if(res){
        this.userStatus = res.status;

      }else{
        this.router.navigate(['auth']);
      }

      this.isLoading = false;
    });
  }

}
