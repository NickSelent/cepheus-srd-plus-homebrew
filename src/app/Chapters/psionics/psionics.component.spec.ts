import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsionicsComponent } from './psionics.component';

describe('PsionicsComponent', () => {
  let component: PsionicsComponent;
  let fixture: ComponentFixture<PsionicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsionicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsionicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
