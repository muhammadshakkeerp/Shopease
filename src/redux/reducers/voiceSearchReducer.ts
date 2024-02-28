import { START_VOICE_SEARCH } from "../actions/voiceActions";

interface VoiceSearchState {
  isSearching: boolean;
}

const initialState: VoiceSearchState = {
  isSearching: false,
};

const voiceSearchReducer = (
  state = initialState,
  action: any
): VoiceSearchState => {
    console.log(action.paylaod)
  switch (action.type) {
    case START_VOICE_SEARCH:
      return {
        ...state,
        isSearching: true,
      };
    default:
      return state;
  }
};

export default voiceSearchReducer;
