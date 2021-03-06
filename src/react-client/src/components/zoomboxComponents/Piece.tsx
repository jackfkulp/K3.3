import React, { Component, MouseEvent } from 'react';
import {
    ALL_AIRFIELD_LOCATIONS,
    DESTROYER_TYPE_ID,
    LIST_ALL_AIRFIELD_PIECES,
    MISSILE_TYPE_ID,
    TYPE_MOVES,
    TYPE_NAMES,
    AIR_REFUELING_SQUADRON_ID
} from '../../../../constants';
import { CapabilitiesState, GameInfoState, PieceType } from '../../../../types';
import { TYPE_IMAGES, TYPE_TEAM_BORDERS } from '../styleConstants';

const pieceStyle = {
    backgroundColor: 'grey',
    margin: '1%',
    float: 'left',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '15%',
    height: '24%'
};

const selectedStyle = {
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.8) inset'
};

const disabledStyle = {
    boxShadow: '0px 0px 0px 2px rgba(70, 60, 50, .5) inset'
};

interface Props {
    piece: PieceType;
    missileAttack: any;
    isSelected: boolean;
    pieceClick: any;
    pieceOpen: any;
    gameInfo: GameInfoState;
    confirmedAtcScramble: CapabilitiesState['confirmedAtcScramble'];
    confirmedMissileAttacks: CapabilitiesState['confirmedMissileAttacks'];
    confirmedBombardments: CapabilitiesState['confirmedBombardments'];
    confirmedMissileDisrupts: CapabilitiesState['confirmedMissileDisrupts'];
    bombardment: any;
    refuelOpen: any;
}

export class Piece extends Component<Props> {
    render() {
        // prettier-ignore
        const { refuelOpen, piece, isSelected, pieceClick, pieceOpen, confirmedMissileAttacks, gameInfo, confirmedAtcScramble, missileAttack, confirmedBombardments, confirmedMissileDisrupts, bombardment } = this.props;

        const pieceCombinedStyle = {
            ...pieceStyle,
            ...TYPE_IMAGES[piece.pieceTypeId],
            ...TYPE_TEAM_BORDERS[piece.pieceTeamId],
            ...(isSelected ? selectedStyle : ''),
            ...(piece.isPieceDisabled ? disabledStyle : '')
        };

        const disabledText = piece.isPieceDisabled ? `\nDisabled` : '';
        const fuelText = piece.pieceFuel >= 0 ? `\nFuel: ${piece.pieceFuel}` : '';
        const movesText = TYPE_MOVES[piece.pieceTypeId] !== 0 ? `\nMoves: ${piece.pieceMoves}` : '';

        let landedText = '';
        if (ALL_AIRFIELD_LOCATIONS.includes(piece.piecePositionId)) {
            if (LIST_ALL_AIRFIELD_PIECES.includes(piece.pieceTypeId)) {
                const airfieldNum = ALL_AIRFIELD_LOCATIONS.indexOf(piece.piecePositionId);
                const airfieldOwner = (gameInfo as any)['airfield' + airfieldNum];
                if (airfieldOwner === piece.pieceTeamId) {
                    if (!confirmedAtcScramble.includes(piece.piecePositionId)) {
                        landedText = '\nLanded';
                    }
                }
            }
        }

        let missileDisruptText = confirmedMissileDisrupts.includes(piece.pieceId) ? '\nDisrupted by Cyber Attack!' : '';

        let targettedByMissileText = '';
        for (let x = 0; x < confirmedMissileAttacks.length; x++) {
            const currentMissileAttackObj = confirmedMissileAttacks[x];
            const { targetId, missileId } = currentMissileAttackObj;
            if (targetId === piece.pieceId) {
                targettedByMissileText = '\nTargetted By Missile';
            }
            if (missileId === piece.pieceId) {
                targettedByMissileText = '\nTargetting an enemy piece.';
            }
        }

        let targettingByBombardmentText = '';
        for (let x = 0; x < confirmedBombardments.length; x++) {
            const currentBombardmentObj = confirmedBombardments[x];
            const { targetId, destroyerId } = currentBombardmentObj;
            if (targetId === piece.pieceId) {
                targettedByMissileText = '\nTargetted By Bombardment';
            }
            if (destroyerId === piece.pieceId) {
                targettedByMissileText = '\nTargetting an enemy piece.';
            }
        }

        // prettier-ignore
        const title = `${TYPE_NAMES[piece.pieceTypeId]}${movesText}${fuelText}${disabledText}${landedText}${targettedByMissileText}${targettingByBombardmentText}${missileDisruptText}`;

        const onClick = (event: MouseEvent) => {
            event.preventDefault();
            pieceClick(piece);
            event.stopPropagation();
        };

        const pieceOpenDoubleClick = (event: MouseEvent) => {
            event.preventDefault();
            pieceOpen(piece);
            event.stopPropagation();
        };

        const missileAttackDoubleClick = (event: MouseEvent) => {
            event.preventDefault();
            missileAttack(piece);
            event.stopPropagation();
        };

        const bombardmentDoubleClick = (event: MouseEvent) => {
            event.preventDefault();
            bombardment(piece);
            event.stopPropagation();
        };

        const tankerDoubleClick = (event: MouseEvent) => {
            event.preventDefault();
            refuelOpen(piece);
            event.stopPropagation();
        };

        const onDoubleClick =
            piece.pieceTypeId === MISSILE_TYPE_ID
                ? missileAttackDoubleClick
                : piece.pieceTypeId === DESTROYER_TYPE_ID
                ? bombardmentDoubleClick
                : piece.pieceTypeId === AIR_REFUELING_SQUADRON_ID
                ? tankerDoubleClick
                : pieceOpenDoubleClick;

        return <div style={pieceCombinedStyle} title={title} onClick={onClick} onDoubleClick={onDoubleClick} />;
    }
}
