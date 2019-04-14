// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactDeleteComponent } from "./contacts/contact-delete/contact-delete.component";
import { SurveyDetailsComponent } from "./survey/survey-details/survey-details.component";
import { SurveyListComponent } from "./survey/survey-list/survey-list.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "About" } },
  { path: "faq", component: FaqComponent, data: { title: "Faq" } },
  {
    path: "products",
    component: ProductsComponent,
    data: { title: "Products" }
  },
  {
    path: "services",
    component: ServicesComponent,
    data: { title: "Services" }
  },
  { path: "contact", component: ContactComponent, data: { title: "Contact" } },

  {
    path: "survey/add",
    component: SurveyDetailsComponent,
    data: { title: "Add Survey" }
  },
  {
    path: "survey/survey-list",
    component: SurveyListComponent,
    data: { title: "Active Survey" }
  },
  {
    path: "survey/survey-list",
    component: SurveyDetailsComponent,
    data: { title: "My Survey" }
  },
  {
    path: "survey/edit/:id",
    component: SurveyDetailsComponent,
    data: { title: "Edit Survey" }
  },

  {
    path: "contact/contact-list",
    component: ContactListComponent,
    data: { title: "Contact List" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/add",
    component: ContactDetailsComponent,
    data: { title: "Add Contact" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/edit/:id",
    component: ContactDetailsComponent,
    data: { title: "Edit Contact" },
    canActivate: [AuthGuard]
  },
  {
    path: "contact/contact-list/delete/:id",
    component: ContactDeleteComponent,
    data: { title: "Add Contact" },
    canActivate: [AuthGuard]
  },

  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Register" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
