import { Socket } from 'socket.io';
// prettier-ignore
import { COMBAT_PHASE_ID, CONTAINER_TYPES, GAME_DOES_NOT_EXIST, GAME_INACTIVE_TAG, initialGameboardEmpty, INNER_PIECE_CLICK_ACTION, SLICE_PLANNING_ID, SOCKET_SERVER_REDIRECT, SOCKET_SERVER_SENDING_ACTION, TYPE_MAIN, TYPE_TERRAIN } from '../../../constants';
import { ExitContainerAction, ExitContainerRequestAction, GameSession } from '../../../types';
import { Game, Piece } from '../../classes';
import { sendUserFeedback } from '../sendUserFeedback';

/**
 * User request to move piece outside of a container to the same position.
 */
export const exitContainer = async (socket: Socket, action: ExitContainerRequestAction) => {
    // Grab the Session
    const { gameId, gameTeam, gameControllers }: GameSession = socket.handshake.session.ir3;

    const { selectedPiece, containerPiece } = action.payload;

    // Grab the Game
    const thisGame = await new Game({ gameId }).init();
    if (!thisGame) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_DOES_NOT_EXIST);
        return;
    }

    const { gameActive, gamePhase, gameSlice } = thisGame;

    if (!gameActive) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_INACTIVE_TAG);
        return;
    }

    if (!gameControllers.includes(TYPE_MAIN)) {
        sendUserFeedback(socket, 'Not the right controller type for this action...');
        return;
    }

    if (gamePhase !== COMBAT_PHASE_ID || gameSlice !== SLICE_PLANNING_ID) {
        sendUserFeedback(socket, 'Not the right phase/slice for container entering.');
        return;
    }

    // Grab the Pieces
    const thisSelectedPiece = await new Piece(selectedPiece.pieceId).init();
    if (!thisSelectedPiece) {
        sendUserFeedback(socket, 'Selected Piece did not exists...refresh page probably');
        return;
    }

    const thisContainerPiece = await new Piece(containerPiece.pieceId).init();
    if (!thisContainerPiece) {
        sendUserFeedback(socket, 'Selected Container piece did not exist...');
        return;
    }

    if (!CONTAINER_TYPES.includes(thisContainerPiece.pieceTypeId)) {
        sendUserFeedback(socket, 'Selected Container piece was not a container type');
        return;
    }

    // TODO: can't 'air drop', other edge cases and stuff
    // TODO: could combine with exitTransport container and do more switch case for edge cases / terrain checking?

    if (!TYPE_TERRAIN[thisSelectedPiece.pieceTypeId].includes(initialGameboardEmpty[thisSelectedPiece.piecePositionId].type)) {
        sendUserFeedback(socket, "that piece can't be on that terrain.");
        return;
    }

    await Piece.putOutsideContainer(thisSelectedPiece.pieceId, thisSelectedPiece.piecePositionId);

    const serverAction: ExitContainerAction = {
        type: INNER_PIECE_CLICK_ACTION,
        payload: {
            gameboardPieces: await Piece.getVisiblePieces(gameId, gameTeam),
            selectedPiece,
            containerPiece
        }
    };

    // Send the update to the client(s)
    socket.to(`game${gameId}team${gameTeam}`).emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
    socket.emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
};

export default exitContainer;
