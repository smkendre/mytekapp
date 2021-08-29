import { Component, OnInit } from '@angular/core';
import { TendersService } from '../../services/tenders.service';
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
    this.isLoading = true;
    this.tender_id = this.route.snapshot.paramMap.get('tenderId');

    this.storageService.get(AuthConstants.AUTH).then(res => {
      // console.log(res.name);

      if(res){

        this.accessToken = res.token;
        this.tenderService.getTenderMilestones(this.tender_id, this.accessToken).subscribe((response) => {
          this.isLoading = false;
          // this.Tenders = [];
          // this.Milestones = response;

          if(response.status == 'success')
          this.Milestones = response.data;

         // console.log(response);
        });


      }else{
        this.router.navigate(['auth']);
      }
    });

    // console.log(this.tender_id);
  }


}
