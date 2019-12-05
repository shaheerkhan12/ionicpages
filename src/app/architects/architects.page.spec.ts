import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchitectsPage } from './architects.page';

describe('ArchitectsPage', () => {
  let component: ArchitectsPage;
  let fixture: ComponentFixture<ArchitectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
