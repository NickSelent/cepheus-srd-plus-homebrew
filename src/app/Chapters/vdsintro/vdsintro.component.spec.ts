import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdsintroComponent } from './vdsintro.component';

describe('VdsintroComponent', () => {
  let component: VdsintroComponent;
  let fixture: ComponentFixture<VdsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VdsintroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
