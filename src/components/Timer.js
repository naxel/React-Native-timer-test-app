import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../modules/actions'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timerInterval = null;
    this.state = {
      startTime: null,
      currentTime: null,
      isStarted: false,
      isEnded: false,
    };
  }

  componentWillMount() {
    if (this.props.isStarted) {
      // resume Timer
      this.checkTime();
      this.timerInterval = setInterval(() => {
        this.checkTime();
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isStarted === true && nextProps.isStarted === false) {
      clearInterval(this.timerInterval);
    }
    this.setState({
      startTime: nextProps.startTime,
      currentTime: nextProps.currentTime,
      isStarted: nextProps.isStarted,
      isEnded: nextProps.isEnded,
    })
  }

  startTimer() {
    this.props.startTimer();
    this.timerInterval = setInterval(() => {
      this.checkTime();
    }, 1000);
  }

  stopTimer() {
    if (this.state.currentTime) {
      this.props.stopTimer();
      clearInterval(this.timerInterval);
    }
  }

  checkTime() {
    this.props.checkTime();
  }

  timeFormat() {
    let seconds;
    let minutes;

    if (this.state.currentTime) {
      seconds = parseInt(
        (this.props.maxTimerValue - (this.state.currentTime - this.state.startTime)) / 1000,
        10
      );
    } else {
      seconds = parseInt(this.props.maxTimerValue / 1000, 10);
    }

    minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ':' + seconds;
  }

  render() {
    let startButton = (
      <TouchableOpacity
        style={styles.timerButton}
        onPress={()=>{this.startTimer()}}
      >
        <Text style={styles.buttonLabel}>Start</Text>
      </TouchableOpacity>
    );

    let stopButton = (
      <TouchableOpacity
        style={styles.timerButton}
        onPress={()=>{this.stopTimer()}}
      >
        <Text style={styles.buttonLabel}>Stop</Text>
      </TouchableOpacity>
    );

    if (this.state.isStarted) {
      startButton = (
        <View style={styles.timerButton}>
          <Text style={[styles.buttonLabel, styles.disabled]}>Start</Text>
        </View>
      );
    } else {
      stopButton = (
        <View style={styles.timerButton}>
          <Text style={[styles.buttonLabel, styles.disabled]}>Stop</Text>
        </View>
      );
    }


    let resetButton = null;
    if (this.state.isEnded) {
      resetButton = (
        <TouchableOpacity
          style={styles.timerButton}
          onPress={()=>{this.stopTimer()}}
        >
          <Text style={styles.buttonLabel}>Reset</Text>
        </TouchableOpacity>
      );
      startButton = null;
      stopButton = null;
    }

    if (!this.props.showButtons) {
      startButton = null;
      stopButton = null;
      resetButton = null;
    }

    return (
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{this.timeFormat()}</Text>

        <View style={styles.timerButtons}>

          {startButton}

          {stopButton}

          {resetButton}

        </View>

      </View>
    )
  }
}

Timer.propTypes = {
  showButtons: React.PropTypes.bool
};

const styles = StyleSheet.create({
  timeContainer: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 1.5,
    borderRadius: Dimensions.get('window').width / 3,
  },
  time: {
    color: 'white',
    fontSize: 32,
  },
  timerButton: {
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  timerButtons: {
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 24,
  },
  disabled: {
    color: 'grey',
  },
});

function mapStateToProps(state) {
  return {
    startTime: state.app.startTime,
    currentTime: state.app.currentTime,
    isStarted: state.app.isStarted,
    isEnded: state.app.isEnded,
    maxTimerValue: state.app.maxTimerValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: () => {
      dispatch(actions.startTimer());
    },
    stopTimer: () => {
      dispatch(actions.stopTimer());
    },
    checkTime: () => {
      dispatch(actions.checkTime());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
