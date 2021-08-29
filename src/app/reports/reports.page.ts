import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { TendersService } from '../services/tenders.service';
import { RegistrationService } from '../services/registration.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController } from '@ionic/angular';


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
    private storageService: StorageService


   ) { }

  ngOnInit() {

    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

        this.accessToken = res.token;
        this.userId = res.id;

        this.tenderService.getMyreports(this.userId, this.accessToken).subscribe((response) => {
          this.isLoading = false;
          if(response.status === 'success'){
            this.Report = response.data;
          }

        });

      }else{
        this.router.navigate(['auth']);
      }
    });


  }




}
