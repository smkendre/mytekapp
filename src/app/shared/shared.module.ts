import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [ TopbarComponent, FooterComponent],
  exports: [ TopbarComponent,FooterComponent]
})
export class SharedModule {}
