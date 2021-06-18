const BOARD_HEIGHT = 8;
const BOARD_WIDTH = 8;
const TILE_SIZE = 50;

const HIGHLIGHT_COLOR = 'green';
const WHITE_TILE_COLOR = "rgb(255, 228, 196)";
const BLACK_TILE_COLOR = "rgb(206, 162, 128)";

const EMPTY = -1;
const WHITE = 0;
const BLACK = 1;

const PAWN = 0;
const KNIGHT = 1;
const ROOK = 2;
const BISHOP = 3;
const QUEEN = 4;
const KING = 5;


const INVALID = -1;
const VALID = 0;
const VALID_CAPTURE = 1;

let board;
let chessCanvas;
let chessCtx;

let curX;
let curY;

class Tile {
    constructor(pieceType, team) {
        this.pieceType = pieceType;
        this.team = team;
    }
}
class Board {
    constructor() {
        this.tiles = [];
        this.validMoves = [];
        this.tiles.push(
            [
                new Tile(ROOK, BLACK),
                new Tile(KNIGHT, BLACK),
                new Tile(BISHOP, BLACK),
                new Tile(QUEEN, BLACK),
                new Tile(KING, BLACK),
                new Tile(BISHOP, BLACK),
                new Tile(KNIGHT, BLACK),
                new Tile(ROOK, BLACK),

            ]
        );

        this.tiles.push(
            [
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),
                new Tile(PAWN, BLACK),

            ]
        );

        for (let i = 0; i < 4; i++) {
            this.tiles.push([
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),


            ]);
        }

        this.tiles.push([
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),

        ]);

        this.tiles.push([
new Tile(ROOK , WHITE),
new Tile(KNIGH , WHITE),
new Tile(BISHOP , WHITE),
new Tile(QUEEN , WHITE),
new Tile(KING , WHite)
        ]);
    }
}

