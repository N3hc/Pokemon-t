import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHighlightsComponent } from './carrousel-highlights.component';

describe('CarrouselHighlightsComponent', () => {
  let component: CarrouselHighlightsComponent;
  let fixture: ComponentFixture<CarrouselHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselHighlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
