import { handleActions } from 'redux-actions'
import {
  START_TIMER,
  STOP_TIMER,
  CHECK_TIME,
} from './constants'

const initialState = {
  startTime: null,
  currentTime: null,
  isStarted: false,
  isEnded: false,
  maxTimerValue: 10 * 60 * 1000, // 10 minutes
};

export default handleActions({

  [START_TIMER]: (state) => {

    const time = new Date().getTime();

    return {
      ...state,
      startTime: time,
      currentTime: time,
      isStarted: true,
      isEnded: false
    };
  },

  [STOP_TIMER]: (state) => {
    return {
      ...state,
      currentTime: null,
      isStarted: false,
      isEnded: false
    };
  },
  [CHECK_TIME]: (state) => {

    if (new Date().getTime() - state.startTime > state.maxTimerValue) {
      return {
        ...state,
        currentTime: new Date().getTime(),
        isStarted: false,
        isEnded: true
      };

    } else {
      return {
        ...state,
        currentTime: new Date().getTime(),
      };
    }
  },

}, initialState)
