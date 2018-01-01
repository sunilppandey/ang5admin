import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

    const routes: Routes = [
        {
            path: '',
            loadChildren: './layout/layout.module#LayoutModule'
        },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: '**', redirectTo: 'not-found' }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
