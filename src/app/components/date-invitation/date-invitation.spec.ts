import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInvitation } from './date-invitation';

describe('DateInvitation', () => {
  let component: DateInvitation;
  let fixture: ComponentFixture<DateInvitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInvitation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInvitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
