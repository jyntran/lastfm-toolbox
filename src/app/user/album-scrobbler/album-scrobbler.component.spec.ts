import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumScrobblerComponent } from './album-scrobbler.component';

describe('AlbumScrobblerComponent', () => {
  let component: AlbumScrobblerComponent;
  let fixture: ComponentFixture<AlbumScrobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumScrobblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumScrobblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
