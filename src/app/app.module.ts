import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SharedModule } from './shared/shared.module';
import { Base64 } from '@ionic-native/base64/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreviewAnyFile,
    CallNumber,
    FileChooser,
    FilePath,
    File,
    FileTransfer,
    FileOpener,
    Base64,
    DocumentViewer
],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab, far);
	}

}
