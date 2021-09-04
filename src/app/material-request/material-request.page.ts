import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';
import { TendersService } from '../services/tenders.service';

@Component({
  selector: 'app-material-request',
  templateUrl: './material-request.page.html',
  styleUrls: ['./material-request.page.scss'],
})
export class MaterialRequestPage implements OnInit {
  isLoading = false;
  public myForm: FormGroup;
  private fieldCount: number = 1;
  accessToken: string;
  userId: string;
  Tenders: any;
  Materials: any;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private storageService: StorageService,
    private tenderService: TendersService,
    private alertCtrl: AlertController) {

    this.myForm = formBuilder.group({
      'tender': ['', Validators.required],
      'material': ['', Validators.required],
      'qnt': ['', Validators.required]
    });
   }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);


      if(res){

        if(res.status == 2) {
          this.router.navigate(['registration']);

        }


        this.accessToken = res.token;
        this.userId = res.id;


  this.tenderService.getMyTenders(this.userId, res.role, this.accessToken).subscribe((response) => {

    if(response.status == 'success')
    this.Tenders = response.data;

    this.isLoading = false;


  });
      }else{
        this.router.navigate(['auth']);
      }
    });
  }


  ionViewWillEnter(){



  }

  addControl(){
    this.fieldCount++;
    this.myForm.addControl('player' + this.fieldCount, new FormControl('', Validators.required));
  }

  onChangeTender(tender_id: number){
    this.tenderService.getMaterialList(tender_id, this.accessToken).subscribe(response => {
      if(response.status == 'success'){
        this.Materials = response.data;
      }
    });
  }

  onSubmit(form: NgForm){

    let postData = {
      tender_id: form.value.tender,
      material_id: form.value.material,
      quantity: form.value.qnt,
      user_id: this.userId

    };

    this.tenderService.submitMaterialRequest(postData, this.accessToken).subscribe(response => {
      this.showAlert(response.message);

      // console.log(response);
    });

    //  this.router.navigateByUrl('/material-request-list');
  }


    private showAlert(message: string) {
      this.alertCtrl
        .create({
          header: 'Alert Message',
          message: message,
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
