import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrobblerComponent } from './manual-scrobbler.component';

import { FormsModule } from '@angular/forms';
import { LastfmService } from '../../core/services/lastfm.service';
import { LastfmServiceStub } from '../../mocks/mocks';

describe('ManualScrobblerComponent', () => {
  let component: ManualScrobblerComponent;
  let fixture: ComponentFixture<ManualScrobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualScrobblerComponent ],
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
    fixture = TestBed.createComponent(ManualScrobblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
