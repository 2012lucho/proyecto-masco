import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { RouteReuseStrategy }                     from '@angular/router';
import { FormsModule }                            from '@angular/forms';
import { HttpClientModule }                       from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen }                    from '@ionic-native/splash-screen/ngx';
import { StatusBar }                       from '@ionic-native/status-bar/ngx';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage }       from './pages/home/home';

import { SideMenuComponent }     from './component/side-menu/side-menu.component';
import { ToggleButtonComponent } from './component/side-menu/toggle-button/toggle-button.component';

import { NgbModule }                      from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter }   from './providers/ngb-date-custom-parser-formatter.provider';
import { NgbDateCustomI18 }               from './providers/ngb-date-custom-i18.provider';
import { NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SideMenuComponent, ToggleButtonComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy,     useClass: IonicRouteStrategy },
    { provide: LocationStrategy,       useClass: HashLocationStrategy },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    { provide: NgbDatepickerI18n,      useClass: NgbDateCustomI18 }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
