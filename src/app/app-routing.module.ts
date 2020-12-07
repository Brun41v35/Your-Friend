import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { Platform } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'frases',
    loadChildren: () => import('./frases/frases.module').then( m => m.FrasesPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },  {
    path: 'anotacoes-usuario',
    loadChildren: () => import('./anotacoes-usuario/anotacoes-usuario.module').then( m => m.AnotacoesUsuarioPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private plataform: Platform, private router: Router) {
    plataform.ready().then()
    if(false){
      router.navigateByUrl('/')
    } else {
      router.navigateByUrl('/login')
    }
  }
}
