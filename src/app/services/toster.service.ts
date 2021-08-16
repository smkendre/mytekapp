import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TosterService {

  constructor(private toasterController: ToastController) { }

  async presentToast(message: string){
    const toast = await this.toasterController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
