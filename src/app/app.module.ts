import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Am1aPage } from '../pages/am1a/am1a';
import { Am1bPage } from '../pages/am1b/am1b';
import { Am1cPage } from '../pages/am1c/am1c';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GradesProvider } from '../providers/grades/grades';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Am1aPage,
    Am1bPage,
    Am1cPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Am1aPage,
    Am1bPage,
    Am1cPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GradesProvider
  ]
})
export class AppModule {}
