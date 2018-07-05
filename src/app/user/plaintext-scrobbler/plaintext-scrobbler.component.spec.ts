import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaintextScrobblerComponent } from './plaintext-scrobbler.component';

describe('PlaintextScrobblerComponent', () => {
  let component: PlaintextScrobblerComponent;
  let fixture: ComponentFixture<PlaintextScrobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaintextScrobblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintextScrobblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
