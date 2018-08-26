export interface StoreState {
  pieces: PieceState[];
  current: CurrentState;
  user: UserState;
  ff: FFState[];
  steps: StepState[];
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
  recipeId: number;
}

export interface FFState {
  id: number;
  sec?: number;
  power?: number;
  temperature?: number;
}

export interface StepState {
  pieceId: number;
  stepId: number;
}
