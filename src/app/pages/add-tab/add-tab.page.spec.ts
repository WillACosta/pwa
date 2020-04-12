import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTabPage } from './add-tab.page';

describe('AddTabPage', () => {
  let component: AddTabPage;
  let fixture: ComponentFixture<AddTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
