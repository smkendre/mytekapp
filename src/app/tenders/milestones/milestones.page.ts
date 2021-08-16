import { Component, OnInit } from '@angular/core';
import { TendersService } from '../tenders.service';
import { StorageService } from '../../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constant';


@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.page.html',
  styleUrls: ['./milestones.page.scss'],
})
export class MilestonesPage implements OnInit {
  Milestones : any = [];
  isLoading = false;
  accessToken: any;

  tender_id: string;

  constructor(
    private tenderService: TendersService,
    private router: Router,
    private storageService: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){

        this.accessToken = res.token;
      }else{
        this.router.navigate(['auth']);
      }
    });

    this.tender_id = this.route.snapshot.paramMap.get('tenderId');
    // console.log(this.tender_id);
  }


  ionViewWillEnter(){
    this.isLoading = true;
  //   this.Milestones = [{
  //     id: 1,
  //     name: 'milestone 1',
  //     from_date: '2021-02-01',
  //     to_date: '2021-03-12',
  //     tender_id: 2
  //   },
  // {
  //   id: 2,
  //     name: 'milestone 2',
  //     from_date: '2021-01-01',
  //     to_date: '2021-02-12',
  //     tender_id: 3
  // }];

    this.tenderService.getTenderMilestones(this.tender_id, this.accessToken).subscribe((response) => {
      this.isLoading = false;
      // this.Tenders = [];
      // this.Milestones = response;

      if(response.status == 'success')
      this.Milestones = response.data;

     // console.log(response);
    });

    //  this.tenderService.fetchTenders().subscribe();
  }

}
