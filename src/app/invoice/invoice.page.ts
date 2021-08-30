import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { InvoiceService } from '../services/invoice.service';
import { RegistrationService } from '../services/registration.service';
import { StorageService } from '../services/storage.service';
import { ApiImage, TendersService } from '../services/tenders.service';

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
    private file: File
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);

      if (res) {

        this.accessToken = res.token;
        this.userId = res.id;

        this.tenderService.getMyTenders(this.userId, this.accessToken).subscribe((response) => {

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
    if (this.platform.is('android')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.registrationService.selectFile().then(uri => {
            this.filePath.resolveNativePath(uri)
              .then(async (filePath) => {
                this.makeBlobFromURI(uri,fileName);
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
    this.imageUrl = 'data:image/jpeg;base64,' + image.base64String;
    this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage: ApiImage) => {
      this.imageUrl = newImage.url ;
    });
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

  onSubmit(form: NgForm) {
    const postData = {
      tender_id: form.value.tender,
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

  makeBlobFromURI(uri,fieldName){
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
       await this.file.readAsArrayBuffer(dirPath, fileName)
        .then((buffer) => {
          console.log('buffer', buffer);
          const imgBlob = new Blob([buffer], {
            type: 'image/jpeg'
          });
          console.log(imgBlob);
          // upload blob
          this.registrationService.uploadImage(imgBlob,fieldName,this.userId, this.accessToken)
          .subscribe(data => {
            console.log(data);
          }, error => console.log('upload error', error));
        }).catch(error => console.log('file read error', error));
      }).catch(error => console.log('pathh resolve error', error));
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
