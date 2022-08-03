import React, { Component } from 'react';
import { Dimensions, View} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { Flex, Box, Spacer, Button } from '@react-native-material/core';
import { MaterialCommunityIcons, SimpleLineIcons, Fontisto } from "@expo/vector-icons";
import MaskInput from 'react-native-mask-input';
import Masks from 'react-native-mask-input/src/Masks';
import _ from 'lodash'

class MyStopWatch extends Component {


    constructor(props) {
      super(props);
      this.state = {
        stopwatchStart: false,
        stopwatchReset: false,
        yellowCard: '03:00',
        redCard: '05:00',
        yellowCardNumber: 180000,
        redCardNumber: 300000
      };

      this.toggleStopwatch = this.toggleStopwatch.bind(this);
      this.resetStopwatch = this.resetStopwatch.bind(this);
    }
   
    toggleStopwatch() {
      this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }
   
    resetStopwatch() {
      this.setState({stopwatchStart: false, stopwatchReset: true});
      this.props.onReset("white")
    }

    
   
    render() {
      let flagYellow = false
      let flagRed = false
      console.log(Dimensions.get('window').width)
      
      return (
        <View style={{flex: 1}}>
          <View style={{
            flex: 1,
            flexDirection: "column"
          }}>
          <Stopwatch start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
            getMsecs={ time => {
                //console.log(time)
                if (!flagYellow && time > this.state.yellowCardNumber) {
                    this.props.onYellowCard("yellow")
                    flagYellow = true
                }
                if (!flagRed && time > this.state.redCardNumber) {
                    this.props.onRedCard("red")
                    flagRed = true
              }
            }
            } 
          />
          <View style={{
            flex: 1,
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
              <View style={{borderColor: 'red', borderStyle: 'solid', borderRadius: 50}}>
              <Button 
                variant='text'
                title={!this.state.stopwatchStart 
                  ? <Fontisto name="play" size={33} color="blue" /> 
                  : <Fontisto name="pause" size={33} color="blue" />} 
                onPress={this.toggleStopwatch}
              />
              </View>
              <Button
                variant='text'
                onPress={this.resetStopwatch}
                title={<Fontisto name="stop" size={33} color="blue" />}
              />
          </View>
          </View>
          <Spacer />
          <Box>
            <Flex direction='row' center>
            <MaterialCommunityIcons name="text-to-speech" size={45} color="#ffd700" />
            <MaskInput
                value={this.state.yellowCard}
                onChangeText={
                    (masked, unMasked) => {
                        const [min, sec] = _.split(masked, ":")
                        this.setState({yellowCardNumber: ((_.toNumber(min)*60)+(_.toNumber(sec)))*1000})
                        this.setState({yellowCard: masked})
                    }
                }
                mask={Masks.TIME_MMSS}
                style={{fontSize: 38, color:'#ffd700'}}
                disabled
            />
            </Flex>
            <Flex direction='row' center>
            <MaterialCommunityIcons name="text-to-speech-off" size={45} color="#f34346" />
            <MaskInput
                value={this.state.redCard}
                onChangeText={
                    (masked, unMasked) => {
                      const [min, sec] = _.split(masked, ":")
                      this.setState({redCardNumber: ((_.toNumber(min)*60)+(_.toNumber(sec)))*1000})
                      this.setState({redCard: masked})
                    }
                }
                mask={Masks.TIME_MMSS}
                style={{fontSize: 38, color:'#f34346'}}
            />
            </Flex>
          </Box>
        <Spacer />
        </View>
      );
    }
  }
   
  const options = {
    container: {
      margin: 'auto'
    },
    text: {
      fontSize: Dimensions.get('window').width*0.2,
      color: 'lightblue',
      marginLeft: 11,
    }
  };
   
  export default MyStopWatch;
   