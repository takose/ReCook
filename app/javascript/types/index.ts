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
  user: UserState;
  originId: number;
}

export interface PieceState {
  id: number;
  name: string;
}

export interface UserState {
  id: number;
  nickname: string;
  imageUrl: string;
  token?: string;
}

export interface CurrentState {
  pieceId: number;
  stepId: number;
  editRecipe: { id: number, title: string, steps: StepState[] };
  playRecipe: { id: number, title: string, steps: StepState[] };
}

export interface FFState {
  id?: number;
  mode: number;
  time?: number;
  power?: number;
  temperature?: number;
  text?: string;
}

export interface TextState {
  id?: number;
  body: string;
  photoUrl: string;
}

export interface TasteState {
  id?: number;
  soysauce: number;
  sake: number;
  mirin: number;
  vinegar: number;
}

export interface StepState {
  id: number;
  pieceId: number;
  content: any;
  nextId: number;
}
