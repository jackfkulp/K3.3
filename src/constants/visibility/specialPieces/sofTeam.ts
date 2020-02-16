import { UNABLE_TO_SEE } from '../../globals';
// prettier-ignore
import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '../../pieces/pieceId';

export const sofTeam: { [id: number]: number } = {};
sofTeam[BOMBER_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[STEALTH_BOMBER_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[STEALTH_FIGHTER_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[AIR_REFUELING_SQUADRON_ID] = UNABLE_TO_SEE;
sofTeam[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[AIRBORN_ISR_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[ARMY_INFANTRY_COMPANY_TYPE_ID] = 1;
sofTeam[ARTILLERY_BATTERY_TYPE_ID] = 1;
sofTeam[TANK_COMPANY_TYPE_ID] = 1;
sofTeam[MARINE_INFANTRY_COMPANY_TYPE_ID] = 1;
sofTeam[ATTACK_HELICOPTER_TYPE_ID] = 1;
sofTeam[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 1;
sofTeam[SAM_SITE_TYPE_ID] = 1;
sofTeam[DESTROYER_TYPE_ID] = 0;
sofTeam[A_C_CARRIER_TYPE_ID] = 0;
sofTeam[SUBMARINE_TYPE_ID] = UNABLE_TO_SEE;
sofTeam[TRANSPORT_TYPE_ID] = 0;
sofTeam[MC_12_TYPE_ID] = 0;
sofTeam[C_130_TYPE_ID] = 0;
sofTeam[SOF_TEAM_TYPE_ID] = 0;
sofTeam[RADAR_TYPE_ID] = 1;
sofTeam[MISSILE_TYPE_ID] = UNABLE_TO_SEE;
