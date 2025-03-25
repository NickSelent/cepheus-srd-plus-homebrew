import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCombatComponent } from './space-combat.component';

describe('SpaceCombatComponent', () => {
  let component: SpaceCombatComponent;
  let fixture: ComponentFixture<SpaceCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCombatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
