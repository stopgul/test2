import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: NotFoundComponent, data: { breadcrumb: "Home" } },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: { breadcrumb: "Not Found" },
  },
  { path: "**", redirectTo: "not-found", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
