import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversationsComponent } from './reservations.component';

describe('ReversationsComponent', () => {
  let component: ReversationsComponent;
  let fixture: ComponentFixture<ReversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
