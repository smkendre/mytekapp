import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';
import { TendersService } from '../services/tenders.service';

// import {subscribe} from 'rxjs/operators';
@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.page.html',
  styleUrls: ['./tenders.page.scss'],
})
export class TendersPage implements OnInit {

   Tenders : any = [];
   accessToken: any;
   userId: string;
   userStatus: string;

   isLoading: boolean;
  constructor(private tenderService: TendersService, private router: Router, private storageService: StorageService, private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {
      //console.log(res);

      if(res){

        if(res.status == 2) {
          this.router.navigate(['registration']);

        }
        this.accessToken = res.token;
        this.userId = res.id;
        this.userStatus = res.status;

        this.tenderService.fetchTenders(this.accessToken).subscribe((response) => {
          this.isLoading = false;

          //console.log("My res:",response);
          //alert(JSON.stringify(response));

          if(response.status == 'success')
          this.Tenders = response.data;

          this.isLoading = false;
        });

      }else{
        this.router.navigate(['auth']);
      }
    });
  }


  submitRequest(id: string){
    this.isLoading = true;

    this.tenderService.submitRequest(id, this.userId, this.accessToken).subscribe(res => {
      this.isLoading = false;

      if(res.status == 'success'){
        this.router.navigateByUrl('/thankyou');

      }else{
        this.showAlert(res.message);
      }
    });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
