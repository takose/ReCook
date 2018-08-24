export interface StoreState {
  pieces: PiecesState;
  current: CurrentState;
  user: UserState;
}

export interface PieceState {
  id: string;
  name: string;
}

export interface PiecesState {
  pieces: PieceState[];
}

export interface UserState {
  nickname: string;
  image_url: string;
}

export interface CurrentState {
  pieceId: string;
}
