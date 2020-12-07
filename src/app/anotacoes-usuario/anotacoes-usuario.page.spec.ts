import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotacoesUsuarioPage } from './anotacoes-usuario.page';

describe('AnotacoesUsuarioPage', () => {
  let component: AnotacoesUsuarioPage;
  let fixture: ComponentFixture<AnotacoesUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacoesUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotacoesUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
