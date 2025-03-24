import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CharacterCreationComponent } from './Chapters/character-creation/character-creation.component';
import { IntroductionComponent } from './Chapters/introduction/introduction.component';
import { AdventuresComponent } from './Chapters/adventures/adventures.component';
import { CommonAircraftComponent } from './Chapters/common-aircraft/common-aircraft.component';
import { SkillsComponent } from './Chapters/skills/skills.component';
import { PsionicsComponent } from './Chapters/psionics/psionics.component';
import { EquipmentComponent } from './Chapters/equipment/equipment.component';
import { PersonalCombatComponent } from './Chapters/personal-combat/personal-combat.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'adventures', component: AdventuresComponent},
    {path: 'introduction', component: IntroductionComponent},
    {path: 'character', component: CharacterCreationComponent},
    {path: 'aircraft', component: CommonAircraftComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'psionics', component: PsionicsComponent},
    {path: 'equipment', component: EquipmentComponent},
    {path: 'personalcombat', component: PersonalCombatComponent},

    {path: '**', component: HomeComponent}
];

