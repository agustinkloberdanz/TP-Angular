import { RouterModule, Routes } from "@angular/router"
import { TableStudentsComponent } from "./components/table-students/table-students.component"
import { RoutingComponent } from "./components/routing/routing.component"
import { NgModule } from "@angular/core"

const routes = [
    { path: 'tableStudents', component: TableStudentsComponent },
    { path: 'appRouting', component: RoutingComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}