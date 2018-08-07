export interface StoreState {
  piece: PieceState;
  user: UserState;
}

export interface PieceState {
  name: string;
}

export interface UserState {
  nickname: string;
  image_url: string;
}
