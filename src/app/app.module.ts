import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { VetMeetingComponent } from './vet-meeting/vet-meeting.component';
import { UserMeetingComponent } from './user-meeting/user-meeting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VetProfilComponent } from './vet-profil/vet-profil.component';
import { UserSourceClinicComponent } from './user-source-clinic/user-source-clinic.component';
import { VetSourceClinicComponent } from './vet-source-clinic/vet-source-clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    CopyrightComponent,

    VetMeetingComponent,
    UserMeetingComponent,
    UserProfileComponent,
    VetProfilComponent,
    UserSourceClinicComponent,
    VetSourceClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
