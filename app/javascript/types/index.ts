export interface StoreState {
  pieces: PieceState[];
  current: CurrentState;
  user: UserState;
  ff: FFState[];
  taste: TasteState[];
  steps: StepState[];
  text: TextState[];
  recipes: RecipeState[];
}

export interface RecipeState {
  id: number;
  title?: string;
}

export interface PieceState {
  id: number;
  name: string;
}

export interface UserState {
  nickname: string;
  imageUrl: string;
  token: string;
}

export interface CurrentState {
  pieceId: number;
  recipeId: number;
}

export interface FFState {
  id: number;
  mode: number;
  time?: number;
  power?: number;
  temperature?: number;
}

export interface TextState {
  id: number;
  body: string;
}

export interface TasteState {
  id: number;
  soysauce: number;
  sake: number;
  mirin: number;
  vinegar: number;
}

export interface StepState {
  pieceId: number;
  stepId: number;
}
