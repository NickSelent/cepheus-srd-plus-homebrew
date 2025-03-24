import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCombatComponent } from './personal-combat.component';

describe('PersonalCombatComponent', () => {
  let component: PersonalCombatComponent;
  let fixture: ComponentFixture<PersonalCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCombatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
