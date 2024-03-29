import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userStatus : string;
  userId: any;
  accessToken: any;
  isLoading = true;

  userRole: any;


  tenderPath: string = 'tenders';
  myTenderPath: string = 'my-tenders';
  reportsPath: string = 'reports';
  requestPath: string = 'material-request-list';
  invoicePath: string = 'invoice';

  public slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor(private router: Router, private storageService: StorageService) {

  }

  ngOnInit() {}
  ionViewWillEnter() {

    // this.slides.startAutoplay();
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){
        this.userId = res.id;
        this.accessToken = res.token;
        this.userStatus = res.status;
        this.userRole = res.role;

        if(res.status == 2){
          this.tenderPath = this.myTenderPath = this.invoicePath = this.reportsPath = this.requestPath = 'registration';
        }

        if(res.status == 4){
          this.tenderPath = this.myTenderPath = this.invoicePath = this.reportsPath = this.requestPath = 'registration-thankyou';
        }

      }else{
        this.router.navigate(['auth']);
      }

      this.isLoading = false;
    });
  }

  doRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
