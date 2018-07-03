import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrobblerComponent } from './manual-scrobbler.component';

describe('ManualScrobblerComponent', () => {
  let component: ManualScrobblerComponent;
  let fixture: ComponentFixture<ManualScrobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualScrobblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualScrobblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
