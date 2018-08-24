export interface StoreState {
  pieces: PieceState[];
  current: CurrentState;
  user: UserState;
}

export interface PieceState {
  id: number;
  name: string;
}

export interface UserState {
  nickname: string;
  image_url: string;
}

export interface CurrentState {
  pieceId: number;
}
