import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { TendersService } from '../tenders/tenders.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  Report : any = [];
  isLoading = false;
  accessToken: string;
  userId: string;
  constructor(private router: Router,
    private tenderService: TendersService,
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {


    this.storageService.get(AuthConstants.AUTH).then(res => {

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
  //   this.Report = [
  //     {
  //     id: 1,
  //     field1: 'lorem ipsum',
  //     field2: 'is simple',
  //     field3: 'dummy text',
  //     field4: 'demo test',
  //     datetime: '02nd March, 2021 at 12:30 PM'
  //   },
  // ];

  // this.isLoading = false;

  this.tenderService.getMyreports(this.userId, this.accessToken).subscribe((response) => {
    this.isLoading = false;
    // this.Tenders = [];
    if(response.status == 'success')
    this.Report = response.data;

  })

    // this.tenderService.fetchTenders().subscribe((response) => {
    //   this.isLoading = false;
    //   // this.Tenders = [];
    //   this.Tenders = response;

    //  // console.log(response);
    // });

    //  this.tenderService.fetchTenders().subscribe();
  }

}
