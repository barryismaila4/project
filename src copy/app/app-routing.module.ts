import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdPopupComponentComponent } from './ad-popup-component/ad-popup-component.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatupdateComponent } from './catupdate/catupdate.component';
import { CatuserComponent } from './catuser/catuser.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { ListschoolComponent } from './listschool/listschool.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './register/register.component';
import { StyleaddComponent } from './styleadd/styleadd.component';
import { StylelistComponent } from './stylelist/stylelist.component';
import { StyleupdateComponent } from './styleupdate/styleupdate.component';
import { StyleuserComponent } from './styleuser/styleuser.component';
import { UpdcourseComponent } from './updcourse/updcourse.component';
import { UsercourseComponent } from './usercourse/usercourse.component';
import { UserschoolComponent } from './userschool/userschool.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'public', component: PublicComponent, children: [
      { path: '', redirectTo: 'catuser', pathMatch: 'full' }, // Redirige par défaut vers Catuser
      { path: 'styles/:categoryId', component: StyleuserComponent },
      { path: 'catuser', component: CatuserComponent },
      { path: 'style/:styleId/schools', component: UserschoolComponent },
      { path: 'school/:schoolId/courses', component: UsercourseComponent },
      { path: 'chat', component: ChatbotComponent },
    ]
  },
  { path: 'categoryadd', component: CategoryCrudComponent },
  { path: 'catlist', component: CatlistComponent },
  { path: 'catup', component: CatupdateComponent },
  { path: 'styleadd', component: StyleaddComponent },
  { path: 'stylelist', component: StylelistComponent },
  { path: 'styleup', component: StyleupdateComponent },
  { path: 'addschool', component: AddschoolComponent },
  { path: 'listschool', component: ListschoolComponent },
  { path: 'addcourse', component: AddcourseComponent },
  { path: 'listcourse', component: ListcourseComponent },
  { path: 'uptcourse', component: UpdcourseComponent },
  { path: 'add', component: AdPopupComponentComponent },

  // Redirection par défaut vers le composant public
  { path: '', redirectTo: '/public', pathMatch: 'full' },

  // Route wildcard pour gérer les routes non définies
  { path: '**', redirectTo: '/public' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
