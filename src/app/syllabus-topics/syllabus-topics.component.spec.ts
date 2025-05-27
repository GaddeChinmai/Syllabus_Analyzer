import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusTopicsComponent } from './syllabus-topics.component';

describe('SyllabusTopicsComponent', () => {
  let component: SyllabusTopicsComponent;
  let fixture: ComponentFixture<SyllabusTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabusTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
