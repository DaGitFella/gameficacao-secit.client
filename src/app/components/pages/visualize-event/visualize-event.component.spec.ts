import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeEventComponent } from './visualize-event.component';

describe('VisualizeEventComponent', () => {
  let component: VisualizeEventComponent;
  let fixture: ComponentFixture<VisualizeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizeEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
