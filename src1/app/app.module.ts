import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddNewMemberComponent } from './add-new-member/add-new-member.component';
import { LoginComponent } from './login/login.component';
import { CliaComponent } from './clia/clia.component';
import { AgentComponent } from './agent/agent.component';
import { PolicyHolderComponent } from './policy-holder/policy-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AddComponent,
    UpdateComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    AddNewMemberComponent,
    LoginComponent,
    CliaComponent,
    AgentComponent,
    PolicyHolderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
      {path:'add',component:AddComponent},
      {path:'update/:no',component:UpdateComponent},
      {path:'edit-profile',component:EditProfileComponent},
      {path:'change-password',component:ChangePasswordComponent},
      {path:'add-new-member',component:AddNewMemberComponent},
      {path:'clia',component:CliaComponent},




    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
