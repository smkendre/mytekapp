import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm  } from '@angular/forms';
import { TendersService } from '../tenders.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';

@Component({
  selector: 'app-submit-report',
  templateUrl: './submit-report.page.html',
  styleUrls: ['./submit-report.page.scss'],
})
export class SubmitReportPage implements OnInit {
  Fields : any = [];
  isLoading = false;
  form: FormGroup;
  accessToken: string;
  tender_id: string;
  userId: string;

  constructor(private tenderService: TendersService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {


    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

        this.accessToken = res.token;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });

    this.tender_id = this.route.snapshot.paramMap.get('tenderId');

  }



  ionViewWillEnter(){
    this.isLoading = true;


  //   this.Fields = [
  //     {
  //     id: 1,
  //     name: 'Vendor Name'
  //   },
  //   {
  //     id: 1,
  //     name: 'Field 1'
  //   },
  //   {
  //     id: 1,
  //     name: 'Field12'
  //   },
  //   {
  //     id: 1,
  //     name: 'Field13'
  //   },
  //   {
  //     id: 1,
  //     name: 'Field14'
  //   }
  // ];


    this.tenderService.getReportFields(this.tender_id, this.accessToken).subscribe((response) => {
      this.isLoading = false;
      // this.Tenders = [];
      if(response.status == 'success')
      this.Fields = response.data;

    })

    // this.tenderService.getReportFields().subscribe((response) => {
    //   this.isLoading = false;
    //   // this.Tenders = [];
    //   this.Fields = response;

    // })

  }

  onSubmit(form: NgForm){
    this.isLoading = true;

    // this.router.navigateByUrl('/reports');

    // this.loadingCtrl
    //   .create({ keyboardClose: true, message: 'Logging in...' })
    //   .then(loadingEl => {
    //     loadingEl.present();
    //     let authObs: Observable<ResponseType>;
    //       authObs = this.tenderService.submitReport(this.Fields);
    //        console.log(authObs);


    //     authObs.subscribe(
    //       resData => {
    //         // console.log(resData);
    //         this.isLoading = false;
    //         loadingEl.dismiss();

    //         const code = resData.error_code;
    //         if(code){
    //           this.showAlert(resData.message);

    //         }else{

    //         }

    //         this.router.navigateByUrl('/home');
    //       },
    //       errRes => {
    //         loadingEl.dismiss();

    //       }
    //     );
    //   });

    if (!form.valid) {
      return;
    }
    // console.log(form.value);

    const formData = form.value;

    this.tenderService.submitReportData(formData, this.userId, this.tender_id, this.accessToken).subscribe(res => {
      this.isLoading = false;

      // if(res.status == 'success'){
        this.showAlert(res.message);

      // }else{
      //   this.showAlert(res.message);
      // }
    });

  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message: message,
        buttons: [{
          text: 'Okey',
          handler: () => {
            this.router.navigate(['reports']);
          }
        }
  ]
      })
      .then(alertEl => alertEl.present());
  }

}
