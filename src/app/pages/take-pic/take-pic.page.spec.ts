import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePicPage } from './take-pic.page';

describe('TakePicPage', () => {
  let component: TakePicPage;
  let fixture: ComponentFixture<TakePicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
