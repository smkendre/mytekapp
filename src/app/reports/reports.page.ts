/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { TendersService } from '../services/tenders.service';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  Report: any = [];
  isLoading = false;
  accessToken: string;
  userId: string;
  livePath: string = environment.liveUrl;
  userRole: any;
  constructor(private router: Router,
    private tenderService: TendersService,
    private storageService: StorageService,
    private alertCtrl: AlertController,
    // private previewAnyFile: PreviewAnyFile

  ) { }


  ngOnInit() { }
  ionViewWillEnter() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if (res) {

        if (res.status === 2) {
          this.router.navigate(['registration']);
        }

        this.accessToken = res.token;
        this.userId = res.id;
        this.userRole = res.role;
        console.log('user role: ' + this.userRole);
        this.tenderService.getMyreports(this.userId, res.role, this.accessToken).subscribe((response) => {
          this.isLoading = false;
          if (response.status === 'success') {
            this.Report = response.data;
          }

        });

      } else {
        this.router.navigate(['auth']);
      }
    });


  }


  getImageUrl(url: string) {
    if (url.indexOf('documents') >= 0) {
      return this.livePath + url;;
    } else {
      return url;
    }
  }

  updateStatus(status: string, id) {
    const postData = { status, id };


    this.tenderService.updateReportStatus(postData, this.accessToken).subscribe(response => {

      if (response.status === 'success') {
        this.showAlert(response.message);
      } else {
        this.showAlert('Some error occurred, please try again after sometime');
      }
      // console.log(response);
    });
  }

  previewFile(path: string) {
    (<any>window).PreviewAnyFile.previewBase64(
      win => console.log('open status',win),
      error => console.error('open failed', error),
      path
  );
    // const options: PreviewAnyFileOptions = {
    //   name: 'file.pdf',
    //   mimeType:'application/pdf'
    // };
    // PreviewAnyFile.previewBase64(path)
    //   .then((res: any) => console.log(res))
    //   .catch((error: any) => console.error(error));
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message,
        buttons: [{
          text: 'Okey',
          handler: () => {
            this.router.navigate(['material-request-list']);
          }
        }
        ]
      })
      .then(alertEl => alertEl.present());
  }

}
