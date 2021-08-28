import { Component, OnInit } from '@angular/core';
import { TendersService } from '../../services/tenders.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constant';


@Component({
  selector: 'app-my-tenders',
  templateUrl: './my-tenders.page.html',
  styleUrls: ['./my-tenders.page.scss'],
})
export class MyTendersPage implements OnInit {
  Tenders : any = [];
  accessToken: any;
  userId: string;

  isLoading = false;
  constructor(private tenderService: TendersService,private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);


      if(res.status == 2) {
        this.router.navigate(['registration']);

      }

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
  //     name: 'Tender 5',
  //     category: 'civil',
  //     location: 'hinjewadi, pune, mh'
  //   },{
  //     id: 2,
  //     name: 'Tender 6',
  //     category: 'cctv',
  //     location: 'borivali, mumbai, mh'
  //   }
  // ];

  this.tenderService.getMyTenders(this.userId, this.accessToken).subscribe((response) => {
    this.isLoading = false;

    if(response.status == 'success')
    this.Tenders = response.data;

  });

    // this.tenderService.getMyTenders().subscribe((response) => {
    //   this.isLoading = false;
    //   // this.Tenders = [];
    //   this.Tenders = response;

    //  // console.log(response);
    // })

    //  this.tenderService.fetchTenders().subscribe();
  }


}
