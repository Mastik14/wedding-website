import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingOfTheDay } from './timing-of-the-day';

describe('TimingOfTheDay', () => {
  let component: TimingOfTheDay;
  let fixture: ComponentFixture<TimingOfTheDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimingOfTheDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimingOfTheDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
