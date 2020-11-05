import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrasesPage } from './frases.page';

describe('FrasesPage', () => {
  let component: FrasesPage;
  let fixture: ComponentFixture<FrasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
