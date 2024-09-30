import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddschoolComponent } from './addschool/addschool.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatupdateComponent } from './catupdate/catupdate.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './register/register.component';
import { StyleaddComponent } from './styleadd/styleadd.component';
import { StylelistComponent } from './stylelist/stylelist.component';
import { StyleupdateComponent } from './styleupdate/styleupdate.component';
import { ListschoolComponent } from './listschool/listschool.component';
import { StylelisteComponent } from './styleliste/styleliste.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { UpdcourseComponent } from './updcourse/updcourse.component';
import { CatuserComponent } from './catuser/catuser.component';
import { StyleuserComponent } from './styleuser/styleuser.component';
import { UserschoolComponent } from './userschool/userschool.component';
import { CourseComponent } from './course/course.component';
import { UsercourseComponent } from './usercourse/usercourse.component';
import { AdPopupComponentComponent } from './ad-popup-component/ad-popup-component.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    AdminComponent,
    CategoryCrudComponent,
    CatlistComponent,
    CatupdateComponent,
    StyleaddComponent,
    StylelistComponent,
    StyleupdateComponent,
    AddschoolComponent,
    ListschoolComponent,
    StylelisteComponent,
    AddcourseComponent,
    ListcourseComponent,
    UpdcourseComponent,
    CatuserComponent,
    StyleuserComponent,
    UserschoolComponent,
    CourseComponent,
    UsercourseComponent,
    AdPopupComponentComponent,
    ChatbotComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],  // Removed provideClientHydration() if not using SSR
  bootstrap: [AppComponent]
})
export class AppModule { }
