import { PAWN } from '../brands'
import { Piece } from './piece'

export class Pawn extends Piece {

	get brand() {
		return PAWN;
	}

	get unicode() {
		return this.isWhite ? '♙' : '♟';
	}

	get fenEncoding() {
		return this.isWhite ? 'P' : 'p';
	}

	get startRow() {
		return this.isWhite ? 6 : 1;
	}

	get reach() {
		return this.isWhite ? -1 : 1;
	}

	canMove(position, from, to) {
		// pawns can only move forwards:
		if (from.x !== to.x) {
			return false;
		}
		const reach = this.reach;
		// pawns can move two squares on their first move.
		if (from.y === this.startRow) {
			return to.y === from.y + reach || to.y === from.y + reach * 2;
		}
		return to.y === from.y + reach;
	}

	canCapture(position, from, to) {
		return (
			from.x === to.x + 1 || from.x === to.x -1 &&
			to.y === from.y + this.reach
		);
	}
}
