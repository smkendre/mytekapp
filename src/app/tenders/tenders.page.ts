import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';
import { TendersService } from './tenders.service';
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

   isLoading = false;
  constructor(private tenderService: TendersService, private router: Router, private storageService: StorageService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){
        this.accessToken = res.token;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });
  }

  ionViewWillEnter(){
    this.isLoading = true;

  //   this.Tenders = [
  //     {
  //     id: 1,
  //     name: 'Tender 1',
  //     category: 'civil',
  //     location: 'hinjewadi, pune, mh'
  //   },{
  //     id: 2,
  //     name: 'Tender 2',
  //     category: 'cctv',
  //     location: 'borivali, mumbai, mh'
  //   },
  //   {
  //     id: 3,
  //     name: 'Tender 3',
  //     category: 'ORF Arial',
  //     location: 'bhuj, pune, mh'
  //   },
  //   {
  //     id: 4,
  //     name: 'Tender 4',
  //     category: 'IT',
  //     location: 'hinjewadi, pune, mh'
  //   }
  // ];


    this.tenderService.fetchTenders(this.accessToken).subscribe((response) => {
      this.isLoading = false;

      if(response.status == 'success')
      this.Tenders = response.data;

    });

    //  this.tenderService.fetchTenders().subscribe();
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
