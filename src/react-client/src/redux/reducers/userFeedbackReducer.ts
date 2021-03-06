import { AnyAction } from 'redux';
//prettier-ignore
import { ANTISAT_HIT_ACTION, ANTISAT_SELECTED, ATC_SCRAMBLE_SELECTED, ATC_SCRAMBLE_SELECTING, BATTLE_FIGHT_RESULTS, BIO_WEAPON_SELECTED, BIO_WEAPON_SELECTING, BOMBARDMENT_SELECTED, BOMBARDMENT_SELECTING, CANCEL_PLAN, COMBAT_PHASE, COMM_INTERRUPT_SELECTING, COMM_INTERRUP_SELECTED, CyberDefenseCheckAction, CYBER_DEFENSE_CHECK, CYBER_DEFENSE_SELECTED, DELETE_PLAN, DRONE_SWARM_SELECTED, DRONE_SWARM_SELECTING, EVENT_BATTLE, GOLDEN_EYE_SELECTED, GOLDEN_EYE_SELECTING, INITIAL_GAMESTATE, INSURGENCY_SELECTED, INSURGENCY_SELECTING, MAIN_BUTTON_CLICK, MISSILE_DISRUPT_SELECTED, MISSILE_DISRUPT_SELECTING, MISSILE_SELECTED, MISSILE_SELECTING, NEWS_PHASE, NEW_ROUND, NO_MORE_BATTLES, NUKE_SELECTED, NUKE_SELECTING, PLACE_PHASE, PLAN_WAS_CONFIRMED, PURCHASE_PHASE, RAISE_MORALE_SELECTED, RAISE_MORALE_SELECTING, REMOTE_SENSING_HIT_ACTION, REMOTE_SENSING_SELECTED, REMOTE_SENSING_SELECTING, RODS_FROM_GOD_SELECTED, RODS_FROM_GOD_SELECTING, SEA_MINE_SELECTED, SEA_MINE_SELECTING, SET_USERFEEDBACK, SHOP_PURCHASE, SHOP_REFUND, SHOP_TRANSFER, SLICE_CHANGE, START_PLAN, UserfeedbackAction, UserfeedbackState } from '../../../../types';

const initialUserFeedback: UserfeedbackState = 'Loading...';

export function userFeedbackReducer(state = initialUserFeedback, action: AnyAction) {
    const { type } = action;

    switch (type) {
        case INITIAL_GAMESTATE:
            return 'Welcome to Island Rush!';

        case SET_USERFEEDBACK:
            return (action as UserfeedbackAction).payload.userFeedback;

        case CYBER_DEFENSE_CHECK:
            if ((action as CyberDefenseCheckAction).payload.isActive) {
                return 'Other team has cyber defense active!';
            } else {
                return 'Other team does not have cyber defense yet';
            }

        case SHOP_REFUND:
            return 'Refunded the purchase!';

        case SHOP_PURCHASE:
            return 'Purchased the item!';

        case SHOP_TRANSFER:
            return 'Confirmed the purchases...check the inventory!';

        case START_PLAN:
            return 'Now Planning: Select positions to create the plan...';

        case CANCEL_PLAN:
            return 'Cancelled the plan...';

        case DELETE_PLAN:
            return 'Deleted the confirmed plan...';

        case RODS_FROM_GOD_SELECTING:
            return 'Now select a position to be obliterated.';

        case RODS_FROM_GOD_SELECTED:
            return 'selected position to kill!';

        case CYBER_DEFENSE_SELECTED:
            return 'cyber defense is now active';

        case BIO_WEAPON_SELECTED:
            return 'selected position to deploy bio weapons to';

        case BIO_WEAPON_SELECTING:
            return 'Now select a position to get bio weaponed!';

        case MISSILE_SELECTED:
            return 'selected piece to try and hit with missile';

        case MISSILE_SELECTING:
            return 'now select a piece to target with the missile';

        case MISSILE_DISRUPT_SELECTED:
            return 'selected a missile to disrupt';

        case MISSILE_DISRUPT_SELECTING:
            return 'now select a missile in a silo to disrupt.';

        case SEA_MINE_SELECTING:
            return 'Now select a position with a transport to drop off some sea mines.';

        case SEA_MINE_SELECTED:
            return 'selected a position to deploy sea mines.';

        case BOMBARDMENT_SELECTING:
            return 'Now select a land piece within range to bombard.';

        case BOMBARDMENT_SELECTED:
            return 'selected a target to bombard with destroyer';

        case ANTISAT_SELECTED:
            return 'anti sat missiles are live and actively looking for satellites to kill.';

        case ANTISAT_HIT_ACTION:
            return 'anti sat missiles hit a target! enemy is now blinded';

        case REMOTE_SENSING_HIT_ACTION:
            return 'enemy has used anti sat missiles to destroy the satellite!';

        case DRONE_SWARM_SELECTING:
            return 'Now select a position with a C130 to drop off some drone swarms.';

        case DRONE_SWARM_SELECTED:
            return 'selected a position to deploy drone swarms.';

        case NUKE_SELECTING:
            return 'Now select an area to nuke';

        case NUKE_SELECTED:
            return 'selected an area to nuke.';

        case ATC_SCRAMBLE_SELECTING:
            return 'Now select an airfield to disable for a while.';

        case ATC_SCRAMBLE_SELECTED:
            return 'selected an airfield to disable for a while.';

        case REMOTE_SENSING_SELECTED:
            return 'selected area to remote sense!';

        case RAISE_MORALE_SELECTING:
            return 'Now select a commander type to boost with +1 moves.';

        case RAISE_MORALE_SELECTED:
            return 'selected a commander type to boost.';

        case REMOTE_SENSING_SELECTING:
            return 'Now select an area to remote sense.';

        case INSURGENCY_SELECTED:
            return 'selected position to start insurgency!';

        case INSURGENCY_SELECTING:
            return 'Now select a position to start an insurgency!';

        case COMM_INTERRUP_SELECTED:
            return 'selected an area to interrupt communication.';

        case COMM_INTERRUPT_SELECTING:
            return 'Now select an area to start interrupting communication!';

        case GOLDEN_EYE_SELECTED:
            return "selected an area to 'golden eye' thing";

        case GOLDEN_EYE_SELECTING:
            return "Now select an area to 'golden eye' thing";

        case PLAN_WAS_CONFIRMED:
            return 'Plan was confirmed!';

        case MAIN_BUTTON_CLICK:
            return 'Waiting on the other team...';

        case PURCHASE_PHASE:
            return 'Switched to the purchase phase....check out the shop and buy stuff...';

        case COMBAT_PHASE:
            return 'Switched to the combat phase...start to plan your turn by clicking on pieces!';

        case SLICE_CHANGE:
            return 'Done planning, click main button to execute the plan...';

        case NEWS_PHASE:
            return 'Switched to the news phase...';

        case NEW_ROUND:
            return 'New Round of Combat!...';

        case PLACE_PHASE:
            return 'Place troops onto the board from inventory...';

        case NO_MORE_BATTLES:
            return 'ready to execute next step!';

        case BATTLE_FIGHT_RESULTS:
            return 'got results of the battle...';

        case EVENT_BATTLE:
            return 'battle has started!';

        default:
            // Do nothing
            return state;
    }
}
