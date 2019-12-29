import { Dispatch } from 'redux';
import { COMBAT_PHASE_ID, SLICE_PLANNING_ID } from '../../../../../constants';
import { EmitType, GoldenEyeSelectingAction } from '../../../../../types';
import { GOLDEN_EYE_SELECTING } from '../../../../../constants';
import setUserfeedbackAction from '../setUserfeedbackAction';
import { InvItemType } from '../../../../../types';

export const goldenEye = (invItem: InvItemType) => {
    return (dispatch: Dispatch, getState: any, emit: EmitType) => {
        const { gameInfo } = getState();
        const { gamePhase, gameSlice } = gameInfo;

        if (gamePhase !== COMBAT_PHASE_ID) {
            dispatch(setUserfeedbackAction('wrong phase for golden eye dude.'));
            return;
        }

        if (gameSlice !== SLICE_PLANNING_ID) {
            dispatch(setUserfeedbackAction('must be in planning to use golden eye.'));
            return;
        }

        //other checks that the player is allowed to select golden eye (do they have it? / game effects...)

        //dispatch that the player is currently selecting area to select
        const goldenEyeSelectingAction: GoldenEyeSelectingAction = {
            type: GOLDEN_EYE_SELECTING,
            payload: {
                invItem
            }
        };

        dispatch(goldenEyeSelectingAction);
    };
};

export default goldenEye;
