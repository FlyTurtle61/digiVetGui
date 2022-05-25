import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMeetingComponent } from './user-meeting/user-meeting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSourceClinicComponent } from './user-source-clinic/user-source-clinic.component';
import { VetMeetingComponent } from './vet-meeting/vet-meeting.component';
import { VetProfilComponent } from './vet-profil/vet-profil.component';
import { VetSourceClinicComponent } from './vet-source-clinic/vet-source-clinic.component';

const routes: Routes = [
  {path: 'copyright', component: CopyrightComponent},
  {path:'footer', component: FooterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'user-meeting',component: UserMeetingComponent},
  {path:'user-profile',component: UserProfileComponent},
  {path:'user-source-clinic', component: UserSourceClinicComponent},
  {path: 'vet-meeting',component: VetMeetingComponent},
  {path:'vet-profile',component: VetMeetingComponent},
  {path:'vet-profil',component: VetProfilComponent},
  {path:'vet-source-clinic',component: VetSourceClinicComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
