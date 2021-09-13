import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { InvoiceService } from '../services/invoice.service';
import { RegistrationService } from '../services/registration.service';
import { StorageService } from '../services/storage.service';
import {  TendersService } from '../services/tenders.service';
import { Filesystem, Encoding } from '@capacitor/filesystem';
import { environment } from 'src/environments/environment';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  imageUrl: string;
  accessToken: string;
  userId: string;
  tenders: any;
  invoices: [];
  isLoading = true;
  livePath: string = environment.liveUrl;
  form: FormGroup;

  error_messages = {
    'tender': [
      { type: 'required', message: 'Please select tender' },
    ],
  }

  imageError = true;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  constructor(
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private storageService: StorageService,
    private router: Router,
    private tenderService: TendersService,
    private invoiceService: InvoiceService,
    private alertCtrl: AlertController,
    private registrationService: RegistrationService,
    private filePath: FilePath,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private fileChooser: FileChooser,
    private file: File,
    private base64: Base64
  ) {

    this.form = this.formBuilder.group({
      tender: ['', Validators.required]
    })
   }

  ngOnInit() {}
  ionViewWillEnter(){
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);

      if (res) {

        if(res.status == 2 ) {
          this.router.navigate(['registration']);

        }

        this.accessToken = res.token;
        this.userId = res.id;

        this.tenderService.getMyTenders(this.userId, res.role, this.accessToken).subscribe((response) => {

          if (response.status === 'success') { this.tenders = response.data; }

        });


        this.invoiceService.getInvoices({ user_id: this.userId }, this.accessToken).subscribe((response) => {

          if (response.status === 'success') { this.invoices = response.data; }

          // console.log(this.invoices);
          this.isLoading = false;
        });
      } else {
        this.router.navigate(['auth']);
      }
    });
  }




  async selectImageSource(fileName) {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'Camera',
        handler: () => {
          this.addImage(CameraSource.Camera, fileName);
        }
      },
      {
        text: 'Choose from Gallery',
        icon: 'Image',
        handler: () => {
          this.addImage(CameraSource.Photos,fileName);
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
    // if (this.platform.is('android')) {
    //   buttons.push({
    //     text: 'Choose a File',
    //     icon: 'attach',
    //     handler: () => {
    //       this.registrationService.selectFile().then(uri => {
    //         // this.filePath.resolveNativePath(uri)
    //         //   .then(async (filePath) => {
    //         //     this.makeBlobFromURI(uri,fileName);
    //         //   })
    //         //   .catch(err => console.log(err));

    //         const fileTransfer: FileTransferObject = this.transfer.create();
    //         let options: FileUploadOptions = {
    //           fileKey: 'ionicfile',
    //           fileName: 'ionicfile.pdf',
    //           headers: {}
    //         }

    //         fileTransfer.upload(uri, environment.apiUrl+'submit-invoice', options)
    //         .then((data) => {
    //         // console.log(data+" Uploaded Successfully");
    //         console.log(JSON.stringify(data));
    //         // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    //        console.log("Image uploaded successfully");
    //       }, (err) => {
    //         console.log(err);
    //        });



    //           this.imageError = false;
    //       });
    //     }
    //   });
    // }


    if (this.platform.is('android')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileChooser.open().then(uri => {
            console.log('uri'+JSON.stringify(uri));
                // get file path
                this.filePath
                .resolveNativePath(uri)
                .then(async (resolvedPath) => {
                  console.log('path', resolvedPath);
                  const pathSplit = resolvedPath.split('/');
                  fileName = pathSplit[pathSplit.length - 1];
                  const dirPath = 'file:///storage/emulated/0/' + pathSplit.splice(pathSplit.length - 2, 1) + '/';
                  console.log('fileName', fileName);
                  console.log('dirPath', dirPath);
                  const readDocument = async () => {
                    const contents = await Filesystem.readFile({
                      path: resolvedPath,
                      encoding: Encoding.UTF8,
                    });
                    console.log('File read results', contents);
                    const imgblob = new Blob([contents.data]); //create blob
                    console.log("Image blob: " + imgblob);
                    // upload blob

                  };
                  readDocument().catch(error => console.log('File read error', error));
                }).catch(error => console.log('path resolve error', error));
          })
          .catch(e => alert('uri'+JSON.stringify(e)));
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
    this.imageUrl = 'data:image/jpeg;base64,' + image.base64String;
    this.imageError = false;
    // this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage: ApiImage) => {
    //   this.imageUrl = newImage.url ;
    // });
  }
  uploadFile(event: Event) {
    // const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    //const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file = (event.target as HTMLInputElement).files[0];


    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.imageUrl = dataUrl;
      //   this.invoiceService.uploadImageFile(this.imageUrl, this.accessToken, this.userId).subscribe(newImage => {
      // });
    };

    fr.readAsDataURL(file);

  }

  onSubmit() {
// console.log("image url:  "+this.imageUrl);
    if(this.imageUrl == undefined || this.imageUrl == ''){
      this.imageError = true;
    }else{
      const postData = {
        tender_id: this.form.value.tender,
        user_id: this.userId,
        document: this.imageUrl

      };
      this.invoiceService.submitInvoice(postData, this.accessToken).subscribe(response => {

        // if(response.status == 'success'){
        //   this.router.navigateByUrl('/registration-thankyou');
        // }else{
        this.showAlert(response.message);
        //  }
      });
    }

  }

  makeBlobFromURI(uri, fieldName) {
    let fileName;
    // resolve path, get buffer, create blob
    this.filePath
      .resolveNativePath(uri)
      .then(async (resolvedPath) => {
        console.log('path', resolvedPath);
        const pathSplit = resolvedPath.split('/');
        fileName = pathSplit[pathSplit.length - 1];
        const dirPath = 'file:///storage/emulated/0/' + pathSplit.splice(pathSplit.length - 2, 1) + '/';
        console.log('fileName', fileName);
        console.log('dirPath', dirPath);
        const readDocument = async () => {
          const contents = await Filesystem.readFile({
            path: resolvedPath,
            encoding: Encoding.UTF8,
          });
          console.log('File read results', contents);
          const imgblob = new Blob([contents.data]); //create blob
          console.log(imgblob);
          // upload blob
          this.registrationService.uploadImage(imgblob, fieldName, this.userId, this.accessToken)
            .subscribe(data => {
              console.log('uploaded',data);
            }, error => console.log('upload error', error));
        };
        readDocument().catch(error => console.log('File read error', error));
      }).catch(error => console.log('path resolve error', error));
  }


  getImageUrl(url: string){
    if(url.indexOf('documents') >=  0 ){
      return this.livePath+url;;
    } else {
      return  url;
    }
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message,
        buttons: [{
          text: 'Okey',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
        ]
      })
      .then(alertEl => alertEl.present());
  }
}
