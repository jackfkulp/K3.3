import * as ID from './pieceId';

export const TYPE_FUEL: { [id: number]: number } = {};
TYPE_FUEL[ID.BOMBER_TYPE_ID] = 15;
TYPE_FUEL[ID.STEALTH_BOMBER_TYPE_ID] = 12;
TYPE_FUEL[ID.STEALTH_FIGHTER_TYPE_ID] = 8;
TYPE_FUEL[ID.AIR_REFUELING_SQUADRON_ID] = 22;
TYPE_FUEL[ID.TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 17;
TYPE_FUEL[ID.AIRBORN_ISR_TYPE_ID] = 13;
TYPE_FUEL[ID.ARMY_INFANTRY_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[ID.ARTILLERY_BATTERY_TYPE_ID] = -1;
TYPE_FUEL[ID.TANK_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[ID.MARINE_INFANTRY_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[ID.ATTACK_HELICOPTER_TYPE_ID] = 3;
TYPE_FUEL[ID.LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = -1;
TYPE_FUEL[ID.SAM_SITE_TYPE_ID] = -1;
TYPE_FUEL[ID.DESTROYER_TYPE_ID] = -1;
TYPE_FUEL[ID.A_C_CARRIER_TYPE_ID] = -1;
TYPE_FUEL[ID.SUBMARINE_TYPE_ID] = -1;
TYPE_FUEL[ID.TRANSPORT_TYPE_ID] = -1;
TYPE_FUEL[ID.MC_12_TYPE_ID] = 12;
TYPE_FUEL[ID.C_130_TYPE_ID] = 14;
TYPE_FUEL[ID.SOF_TEAM_TYPE_ID] = -1;
TYPE_FUEL[ID.RADAR_TYPE_ID] = -1;
TYPE_FUEL[ID.MISSILE_TYPE_ID] = -1;

export const PIECES_WITH_FUEL = [
    ID.BOMBER_TYPE_ID,
    ID.STEALTH_BOMBER_TYPE_ID,
    ID.STEALTH_FIGHTER_TYPE_ID,
    ID.AIR_REFUELING_SQUADRON_ID,
    ID.TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,
    ID.AIRBORN_ISR_TYPE_ID,
    ID.ATTACK_HELICOPTER_TYPE_ID,
    ID.MC_12_TYPE_ID,
    ID.C_130_TYPE_ID
];
