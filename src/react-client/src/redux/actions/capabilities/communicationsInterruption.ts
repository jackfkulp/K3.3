import { Dispatch } from 'redux';
import { COMBAT_PHASE_ID, SLICE_PLANNING_ID, COMM_INTERRUPT_SELECTING } from '../../../../../constants';
import { CommInterruptSelectingAction, EmitType } from '../../../../../types';
import setUserfeedbackAction from '../setUserfeedbackAction';
import { InvItemType } from '../../../../../types';

export const communicationsInterruption = (invItem: InvItemType) => {
    return (dispatch: Dispatch, getState: any, emit: EmitType) => {
        const { gameInfo } = getState();
        const { gamePhase, gameSlice } = gameInfo;

        if (gamePhase !== COMBAT_PHASE_ID) {
            dispatch(setUserfeedbackAction('wrong phase for comm interrupt dude.'));
            return;
        }

        if (gameSlice !== SLICE_PLANNING_ID) {
            dispatch(setUserfeedbackAction('must be in planning to use comm interrupt.'));
            return;
        }

        //other checks that the player is allowed to select comm interrupt (do they have it? / game effects...)

        //dispatch that the player is currently selecting which position to select
        const commInterruptSelectingAction: CommInterruptSelectingAction = {
            type: COMM_INTERRUPT_SELECTING,
            payload: {
                invItem
            }
        };

        dispatch(commInterruptSelectingAction);
    };
};

export default communicationsInterruption;
