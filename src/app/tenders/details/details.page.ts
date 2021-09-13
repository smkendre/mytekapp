import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constant';
import { StorageService } from 'src/app/services/storage.service';
import { TendersService } from '../../services/tenders.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tender : any = [];
   accessToken: any;
   userId: string;
   userStatus: string;
   userRole: any;
    isLoading = false;
    tenderId: string;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private tenderService: TendersService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

        this.accessToken = res.token;
        this.userId = res.id;
        this.userRole = res.role;

    this.tenderService.tenderDetails(this.tenderId, this.accessToken).subscribe((response) => {
      this.isLoading = false;
      if(response.status == 'success')
      {this.tender = response.data;}

    });
      }else{
        this.router.navigate(['auth']);
      }
    });

    this.tenderId = this.route.snapshot.paramMap.get('tenderId');

    // console.log(this.tenderId);

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
