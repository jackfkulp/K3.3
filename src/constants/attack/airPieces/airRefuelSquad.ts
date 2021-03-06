import { UNABLE_TO_HIT } from '../../globals';
// prettier-ignore
import { AIRBORN_ISR_TYPE_ID, AIR_REFUELING_SQUADRON_ID, ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, A_C_CARRIER_TYPE_ID, BOMBER_TYPE_ID, C_130_TYPE_ID, DESTROYER_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, MC_12_TYPE_ID, MISSILE_TYPE_ID, RADAR_TYPE_ID, SAM_SITE_TYPE_ID, SOF_TEAM_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, SUBMARINE_TYPE_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, TANK_COMPANY_TYPE_ID, TRANSPORT_TYPE_ID } from '../../pieces/pieceId';

export const airRefuelSquad: { [id: number]: number } = {};
airRefuelSquad[BOMBER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[STEALTH_BOMBER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[STEALTH_FIGHTER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[AIR_REFUELING_SQUADRON_ID] = UNABLE_TO_HIT;
airRefuelSquad[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[AIRBORN_ISR_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[ARMY_INFANTRY_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[ARTILLERY_BATTERY_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[TANK_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[MARINE_INFANTRY_COMPANY_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[ATTACK_HELICOPTER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[SAM_SITE_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[DESTROYER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[A_C_CARRIER_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[SUBMARINE_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[TRANSPORT_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[MC_12_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[C_130_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[SOF_TEAM_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[RADAR_TYPE_ID] = UNABLE_TO_HIT;
airRefuelSquad[MISSILE_TYPE_ID] = UNABLE_TO_HIT;
