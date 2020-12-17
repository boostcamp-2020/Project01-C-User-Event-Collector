import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import getRandomUserId from '@utils/getRandomUserId';

type UserInfo = {
  id: number;
  nickname?: string | null;
  profileURL?: string;
  isLoggedIn: boolean;
};

type UserState = {
  userInfo: UserInfo;
  trackList: number[];
  albumList: number[];
  artistList: number[];
  playlistList: number[];
};

const initialState: UserState = {
  userInfo: {
    isLoggedIn: false,
    id: getRandomUserId(),
    nickname: null,
    profileURL:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  trackList: [],
  albumList: [],
  artistList: [],
  playlistList: [],
};

// 모든 액션들을 위한 타입
type Action =
  | { type: 'SET_USERINFO'; userInfo: UserInfo }
  | { type: 'SET_TRACKLIST'; trackList: number[] }
  | { type: 'SET_ALBUMLIST'; albumList: number[] }
  | { type: 'SET_ARTISTLIST'; artistList: number[] }
  | { type: 'SET_PLAYLISTLIST'; playlistList: number[] }
  | { type: 'DELETE_ARTIST'; artistId: number }
  | { type: 'ADD_ARTIST'; artistId: number }
  | { type: 'DELETE_USERINFO' };

// 리듀서
function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'SET_USERINFO':
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          isLoggedIn: true,
          nickname: action.userInfo.nickname,
          profileURL: action.userInfo.profileURL,
        },
      };
    case 'SET_TRACKLIST':
      return {
        ...state,
        trackList: action.trackList,
      };
    case 'SET_ALBUMLIST':
      return {
        ...state,
        albumList: action.albumList,
      };
    case 'SET_ARTISTLIST':
      return {
        ...state,
        artistList: action.artistList,
      };
    case 'SET_PLAYLISTLIST':
      return {
        ...state,
        playlistList: action.playlistList,
      };
    case 'DELETE_USERINFO':
      return {
        ...state,
        userInfo: initialState.userInfo,
      };
    case 'DELETE_ARTIST':
      return {
        ...state,
        artistList: state.artistList.filter(v => v !== action.artistId),
      };
    case 'ADD_ARTIST':
      return {
        ...state,
        artistList: [...state.artistList, action.artistId],
      };
    default:
      throw new Error('Unhandled action');
  }
}

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type AuthDispatch = Dispatch<Action>;

// Context 만들기
const AuthStateContext = createContext<UserState | null>(null);
const AuthDispatchContext = createContext<AuthDispatch | null>(null);

// SampleProvider 에서 useReduer를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error('Cannot find AuthProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error('Cannot find AuthProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
