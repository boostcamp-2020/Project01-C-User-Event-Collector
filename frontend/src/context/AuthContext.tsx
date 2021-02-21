import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import getRandomUserId from '@utils/getRandomUserId';

interface UserInfo {
  id: number;
  nickname?: string | null;
  profileURL?: string;
  isLoggedIn: boolean;
}

interface UserState {
  userInfo: UserInfo;
  trackList: number[];
  albumList: number[];
  artistList: number[];
  playlistList: number[];
}

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

type Action =
  | { type: 'SET_USERINFO'; userInfo: UserInfo }
  | { type: 'SET_TRACKLIST'; trackList: number[] }
  | { type: 'SET_ALBUMLIST'; albumList: number[] }
  | { type: 'SET_ARTISTLIST'; artistList: number[] }
  | { type: 'SET_PLAYLISTLIST'; playlistList: number[] }
  | { type: 'ADD_ARTIST'; artistId: number }
  | { type: 'DELETE_ARTIST'; artistId: number }
  | { type: 'ADD_TRACK'; trackId: number }
  | { type: 'DELETE_TRACK'; trackId: number }
  | { type: 'DELETE_USERINFO' };

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
    case 'ADD_ARTIST':
      return {
        ...state,
        artistList: [...state.artistList, action.artistId],
      };
    case 'DELETE_ARTIST':
      return {
        ...state,
        artistList: state.artistList.filter(v => v !== action.artistId),
      };
    case 'ADD_TRACK':
      return {
        ...state,
        trackList: [...state.trackList, action.trackId],
      };
    case 'DELETE_TRACK':
      return {
        ...state,
        trackList: state.trackList.filter(v => v !== action.trackId),
      };

    default:
      throw new Error('Unhandled action');
  }
}

type AuthDispatch = Dispatch<Action>;

const AuthStateContext = createContext<UserState | null>(null);
const AuthDispatchContext = createContext<AuthDispatch | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error('Cannot find AuthProvider');
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error('Cannot find AuthProvider');
  return dispatch;
}
