import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendPicPage } from './send-pic.page';

describe('SendPicPage', () => {
  let component: SendPicPage;
  let fixture: ComponentFixture<SendPicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendPicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
