import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { RegistrationService } from '../services/registration.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.page.html',
  styleUrls: ['./registrations.page.scss'],
})
export class RegistrationsPage implements OnInit {
  areaOfInterst: any = [];
  states: any;
  districts: [];
  talukas: [];
  isLoading = false;
  accessToken: any;
  username: string;
  userId: string;
  toggleDisplay = false;

  constructor(private router: Router, private registrationService: RegistrationService, private storageService: StorageService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){

        this.accessToken = res.token;
        this.username = res.name;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });


  }

  ionViewWillEnter(){
    this.isLoading = true;

    this.registrationService.get_categories(this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.isLoading = false;
        this.areaOfInterst = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });

    this.registrationService.get_states(this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.isLoading = false;
        this.states = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });


  }

  onStateChange(stateId: number){

    console.log(stateId);
    this.registrationService.get_districts(stateId, this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.isLoading = false;
        this.districts = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });
  }


  onDistrictChange(districtid: number){

    this.registrationService.get_talukas(districtid, this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.isLoading = false;
        this.talukas = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });
  }

  toggleOtherField(){
    this.toggleDisplay = !this.toggleDisplay;

  }
  onSubmit(form: NgForm){

    let postData = {
      'name': form.value.name,
      'company': form.value.company,
      'area_of_interest': form.value.area_of_interst,
      'address': form.value.address,
      'state': form.value.state,
      'district': form.value.district,
      'taluka': form.value.taluka,
      'user_id': this.userId
    };
    this.registrationService.register(postData, this.accessToken).subscribe(response => {

      if(response.status == 'success'){
        this.router.navigateByUrl('/registration-thankyou');
      }else{
        this.showAlert(response.message);
      }
      // console.log(response);
    });

    //this.router.navigateByUrl('/registration-thankyou');
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
