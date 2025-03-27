import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonvehiclesComponent } from './uncommonvehicles.component';

describe('UncommonvehiclesComponent', () => {
  let component: UncommonvehiclesComponent;
  let fixture: ComponentFixture<UncommonvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncommonvehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncommonvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
