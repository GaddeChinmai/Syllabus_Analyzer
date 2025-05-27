import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AipredictionsComponent } from './aipredictions.component';

describe('AipredictionsComponent', () => {
  let component: AipredictionsComponent;
  let fixture: ComponentFixture<AipredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AipredictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AipredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
