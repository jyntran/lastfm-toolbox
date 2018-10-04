import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaintextScrobblerComponent } from './plaintext-scrobbler.component';

import { FormsModule } from '@angular/forms';
import { LastfmService } from '../../core/services/lastfm.service';
import { LastfmServiceStub } from '../../mocks/mocks';

describe('PlaintextScrobblerComponent', () => {
  let component: PlaintextScrobblerComponent;
  let fixture: ComponentFixture<PlaintextScrobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaintextScrobblerComponent ],
      imports: [ FormsModule ],
      providers: [
        {
          provide: LastfmService,
          useClass: LastfmServiceStub
        }
      ]
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
