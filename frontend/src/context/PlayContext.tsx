import React, { createContext, useContext, useReducer, Dispatch } from 'react';
// import Playlist from 'pages/playlist';

// type PlayType = 'INORDER' | 'SHUFFLE' | 'ONLYONE';

type State = {
  isPlaying: boolean;
  isMembership: boolean;
  playIndex: number;
  timeProgress: number;
  playList: Array<any>;
};

type Action =
  | { type: 'PLAY_START' }
  | { type: 'PLAY_PAUSE' }
  | { type: 'PLAY_NEXT' }
  | { type: 'PLAY_PREV' }
  | { type: 'ADD_TRACK'; track: any[] }
  | { type: 'REMOVE_TRACK'; trackId: number };

type PlayDispatch = Dispatch<Action>;

const PlayStateContext = createContext<State | null>(null);
const PlayDispatchContext = createContext<PlayDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PLAY_START':
      return {
        ...state,
        isPlaying: true,
      };
    case 'PLAY_PAUSE':
      return {
        ...state,
        isPlaying: false,
      };
    case 'PLAY_NEXT':
      const nextIndex = (state.playIndex + 1) % state.playList.length;
      return {
        ...state,
        playIndex: nextIndex,
      };
    case 'PLAY_PREV':
      const prevIndex = (state.playIndex - 1) % state.playList.length;
      return {
        ...state,
        playIndex: prevIndex < 0 ? prevIndex + state.playList.length : prevIndex,
      };
    case 'ADD_TRACK':
      return {
        ...state,
        playList: [...state.playList, ...action.track],
      };
    case 'REMOVE_TRACK':
      return {
        ...state,
        playList: state.playList.filter(v => v !== action.trackId),
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function PlayProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    isPlaying: false,
    isMembership: false,
    playIndex: 0,
    timeProgress: 0,
    playList: [],
  });

  return (
    <PlayStateContext.Provider value={state}>
      <PlayDispatchContext.Provider value={dispatch}>{children}</PlayDispatchContext.Provider>
    </PlayStateContext.Provider>
  );
}

export function usePlayState() {
  const state = useContext(PlayStateContext);
  if (!state) throw new Error('Cannot find PlayProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function usePlayDispatch() {
  const dispatch = useContext(PlayDispatchContext);
  if (!dispatch) throw new Error('Cannot find PlayProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
