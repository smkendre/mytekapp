import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm  } from '@angular/forms';
import { TendersService, ApiImage } from '../../services/tenders.service';
import {  AlertController, ActionSheetController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;


  constructor(private tenderService: TendersService,
    private router: Router,
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private platform: Platform
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



 async selectImageSource(fileName: string){
  const buttons = [
    {
      text: 'Take Photo',
      icon: 'Camera',
      handler: () => {
        this.addImage(CameraSource.Camera, fileName)
      }
    },
    {
    text: "Choose from Gallery",
    icon: 'Image',
    handler: () => {
      this.addImage(CameraSource.Photos, fileName)
    }
  }
  ];

  if (!this.platform.is('hybrid')) {
    buttons.push({
      text: 'Choose a File',
      icon: 'attach',
      handler: () => {
        this.fileInput.nativeElement.click();
      }
    });
  }

  const actionSheet = await this.actionSheetController.create({
    header: 'Select Image Source',
    buttons
  });
  await actionSheet.present();


}

async addImage(source: CameraSource, fileName: string) {
  const image = await Camera.getPhoto({
    quality: 60,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    source
  });



  const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
  const imageName = 'Give me a name';

  this.tenderService.uploadImage(blobData, imageName, image.format, fileName, this.userId, this.accessToken).subscribe((newImage: ApiImage) => {
    this.images.push(newImage);
  });
}

// Used for browser direct file upload
uploadFile(event: EventTarget) {
  const eventObj: MSInputMethodContext = event as MSInputMethodContext;
  const target: HTMLInputElement = eventObj.target as HTMLInputElement;
  const file: File = target.files[0];

  console.log(file);
  this.tenderService.uploadImageFile(file, this.accessToken).subscribe((newImage: ApiImage) => {
    this.images.push(newImage);
  });
}


b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

}
