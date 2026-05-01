import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHappy } from './be-happy';

describe('BeHappy', () => {
  let component: BeHappy;
  let fixture: ComponentFixture<BeHappy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeHappy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeHappy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
