import { KING, QUEEN, KNIGHT, BISHOP, ROOK, PAWN } from '../constants'
import { Piece } from '../piece'
import { Leaper } from './traits/leaper'
import { Rider } from './traits/rider'
import { Royal } from './traits/royal'


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
}

export class Rook extends Piece {
	constructor(options) {
		super(options);
		Rider.call(this, 1, 0);
	}
	get brand() {
		return ROOK;
	}
	get unicode() {
		return this.isWhite ? '♖' : '♜';
	}
	get fenEncoding() {
		return this.isWhite ? 'R' : 'r';
	}
}

export class Knight extends Piece {
	constructor() {
		super(options);
		Leaper.call(this, 1, 2);
	}
	get brand() {
		return KNIGHT;
	}
	get unicode() {
		return this.isWhite ? '♘' : '♞';
	}
	get fenEncoding() {
		return this.isWhite ? 'N' : 'n';
	}
}

export class Bishop extends Piece {
	constructor() {
		super(options);
		Rider.call(this, 1, 1);
	}
	get brand() {
		return BISHOP;
	}
	get unicode() {
		return this.isWhite ? '♗' : '♝';
	}
	get fenEncoding() {
		return this.isWhite ? 'B' : 'b';
	}
}

export class King extends Piece {
	constructor() {
		super(options);
		Royal.call(this);
	}
	get brand() {
		return KING;
	}
	get unicode() {
		return this.isWhite ? '♔' : '♚';
	}
	get fenEncoding() {
		return this.isWhite ? 'K' : 'k';
	}
}

export class Queen extends Piece {
	constructor() {
		super(options);
		Rider.call(this, 1, 0);
		Rider.call(this, 1, 1);
	}
	get brand() {
		return QUEEN;
	}
	get unicode() {
		return this.isWhite ? '♕' : '♛';
	}
	get fenEncoding() {
		return this.isWhite ? 'Q' : 'q';
	}
}