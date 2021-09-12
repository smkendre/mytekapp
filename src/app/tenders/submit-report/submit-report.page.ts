import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators  } from '@angular/forms';
import { TendersService, ApiImage } from '../../services/tenders.service';
import {  AlertController, ActionSheetController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilePath } from '@ionic-native/file-path/ngx';

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
  imageUrl: any;
  images: ApiImage[] = [];

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  error_messages = {
    'comment': [
      { type: 'required', message: 'Please enter comment' },
    ],
  }

  constructor(private tenderService: TendersService,
    private router: Router,
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private filePath: FilePath,
    private formBuilder: FormBuilder

    ) {

      this.form = this.formBuilder.group({
        'comment': ['', Validators.required],
        'tender_id': [''],
        'file_path': ['']
      });
    }

  ngOnInit() {

    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

        this.accessToken = res.token;
        this.userId = res.id;

        this.tenderService.getReportFields(this.tender_id, this.accessToken).subscribe((response) => {
          // this.Tenders = [];
          if(response.status == 'success')
          this.Fields = response.data;
          this.isLoading = false;

        })

      }else{
        this.router.navigate(['auth']);
      }
    });

    this.tender_id = this.route.snapshot.paramMap.get('tenderId');

  }



  ionViewWillEnter(){


    // this.tenderService.getReportFields().subscribe((response) => {
    //   this.isLoading = false;
    //   // this.Tenders = [];
    //   this.Fields = response;

    // })

  }

  onSubmit(){
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

    if (!this.form.valid) {
      return;
    }
    // console.log(form.value);

    const formData = this.form.value;

    this.tenderService.submitReportData(formData, this.imageUrl, this.userId, this.tender_id, this.accessToken).subscribe(res => {
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


  if (this.platform.is('pwa')) {
    buttons.push({
      text: 'Choose a File',
      icon: 'attach',
      handler: () => {
        this.fileInput.nativeElement.click();
      }
    });
  }

 // for android
 if (this.platform.is('android')) {
  buttons.push({
    text: 'Choose a File',
    icon: 'attach',
    handler: () => {
      this.tenderService.selectFile().then(uri => {
        this.filePath.resolveNativePath(uri)
          .then(async (filePath) => {
           // this.updatedocumentLink(fileName, filePath);
            this.tenderService.makeFileIntoBlob(filePath,fileName).then((blob) => {
              const blobFile = blob;

              this.imageUrl = blobFile;
              // this.tenderService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
              //   console.log('uploaded',res);
              // }, error => console.log('upload error',error));
            });
          })
          .catch(err => console.log(err));
      });
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
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source
  });

  try {

    const imgUrl = 'data:image/jpeg;base64,' + image.base64String;

    this.imageUrl = imgUrl;
    //this.updateImagePreview(fileName, imgUrl);
  }
  catch (error) {

  }


}

// Used for browser direct file upload
uploadFile(event: Event, fieldName) {

  const file: File = (event.target as HTMLInputElement).files[0];


  const fr = new FileReader();
  fr.onload = () => {
    const dataUrl = fr.result.toString();


    // if (fieldName == 'gst_certificate') {
  this.imageUrl = dataUrl;
    // }



    // if (fieldName == 'reg_certificate') {
    //   this.RegimageUrl = dataUrl;
    // }



    // if (fieldName == 'pan_card') {
    //   this.PanimageUrl = dataUrl;
    // }


    // if (fieldName == 'adhaar_file') {
    //   this.AdhaarimageUrl = dataUrl;
    // }


    // this.registrationService.uploadImageFile(this.imageUrl, this.accessToken, fieldName, this.userId).subscribe((newImage: ApiImage) => {
    //   this.images.push(newImage);
    // });
  };

  fr.readAsDataURL(file);

}



// submitDocument(fileName: string){
//   this.tenderService.selectFile().then(uri => {
//     this.filePath.resolveNativePath(uri)
//       .then(async (filePath) => {
//         this.tenderService.makeFileIntoBlob(filePath,fileName).then((blob) => {
//           const blobFile = blob;
//           this.tenderService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
//             console.log('uploaded',res);
//           }, error => console.log('upload error',error));
//         });
//       })
//       .catch(err => console.log(err));
//   });
// }


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
