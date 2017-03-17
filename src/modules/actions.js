import {
  START_TIMER,
  STOP_TIMER,
  CHECK_TIME,
} from './constants'

export const startTimer = () => {
    return {
        type: START_TIMER,
        payload: {}
    }
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
    payload: {}
  }
};

export const checkTime = () => {
  return {
    type: CHECK_TIME,
    payload: {}
  }
};
