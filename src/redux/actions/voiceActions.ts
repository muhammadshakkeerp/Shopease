// voiceActions.ts
import { Dispatch } from 'redux';

export const startVoiceRecognition = () => (dispatch: Dispatch) => {
  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log('Voice recognition started...');
  };

  recognition.onresult = (event) => {
    const recognizedSpeech = event.results[0][0].transcript;
    dispatch({ type: 'SET_RECOGNIZED_SPEECH', payload: recognizedSpeech });
  };

  recognition.onend = () => {
    console.log('Voice recognition ended...');
  };

  recognition.start();
};
