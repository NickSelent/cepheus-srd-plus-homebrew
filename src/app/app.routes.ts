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
import { OffWorldTravelComponent } from './Chapters/off-world-travel/off-world-travel.component';
import { TradeCommerceComponent } from './Chapters/trade-commerce/trade-commerce.component';
import { ShipDesignConstructionComponent } from './Chapters/ship-design-construction/ship-design-construction.component';
import { CommonVesselsComponent } from './Chapters/common-vessels/common-vessels.component';
import { SpaceCombatComponent } from './Chapters/space-combat/space-combat.component';
import { EnvironmentsComponent } from './Chapters/environments/environments.component';
import { WorldsComponent } from './Chapters/worlds/worlds.component';
import { PlanetaryComponent } from './Chapters/planetary/planetary.component';
import { SocialComponent } from './Chapters/social/social.component';
import { StarshipComponent } from './Chapters/starship/starship.component';
import { RefereeingComponent } from './Chapters/refereeing/refereeing.component';
import { VehicledesignComponent } from './Chapters/vehicledesign/vehicledesign.component';
import { CommonGravComponent } from './Chapters/common-grav/common-grav.component';
import { CommongroundComponent } from './Chapters/commonground/commonground.component';
import { CommonwatercraftComponent } from './Chapters/commonwatercraft/commonwatercraft.component';
import { UncommonvehiclesComponent } from './Chapters/uncommonvehicles/uncommonvehicles.component';
import { AppendixaComponent } from './Chapters/appendixa/appendixa.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},

    {path: 'introduction', component: IntroductionComponent},
    {path: 'character', component: CharacterCreationComponent},
    
    {path: 'skills', component: SkillsComponent},
    {path: 'psionics', component: PsionicsComponent},
    {path: 'equipment', component: EquipmentComponent},
    {path: 'personalcombat', component: PersonalCombatComponent},
    {path: 'offworld', component: OffWorldTravelComponent},
    {path: 'tradecommerce', component: TradeCommerceComponent},
    {path: 'shipdesign', component: ShipDesignConstructionComponent},
    {path: 'commonvessels', component: CommonVesselsComponent},
    {path: 'spacecombat', component: SpaceCombatComponent},

    {path: 'environments', component: EnvironmentsComponent },    
    {path: 'worlds', component: WorldsComponent },
    {path: 'planetary', component: PlanetaryComponent },
    {path: 'social', component: SocialComponent },
    {path: 'starship', component: StarshipComponent },
    {path: 'refereeing', component: RefereeingComponent },
    {path: 'adventures', component: AdventuresComponent},

    {path: 'vehicledesign', component: VehicledesignComponent },    
    {path: 'aircraft', component: CommonAircraftComponent},
    {path: 'commongrav', component: CommonGravComponent },    
    {path: 'commonground', component: CommongroundComponent},    
    {path: 'commonwater', component: CommonwatercraftComponent},    
    {path: 'uncommonvehicle', component: UncommonvehiclesComponent},    
    {path: 'appendixa', component: AppendixaComponent},    


    {path: '**', component: HomeComponent}
];

