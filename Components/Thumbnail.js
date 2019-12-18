import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,StyleSheet
} from 'react-vr';

import ModelComponent from './ModelComponent'

export default class Thumbnail extends React.Component{
    constructor(props){
        super(props);
		
    }
	
	
	
    render(){
        return(

	<View>
         <VrButton onClick={()=>{this.props.click(this.props.obj,this.props.txture)}}>
				<View style={
					styles.viewStyle
				}>
				
					<Image
					 style={{width: 0.2, height: 0.2}}
					  source={asset(this.props.src)}
					>
					</Image>
					
				</View>
          </VrButton>
		  <View><Text style={styles.sampleStyle}>{this.props.name}</Text></View>
		  
		  
		  </View>
        )
    }
}

const styles = StyleSheet.create({
  sampleStyle: {
    
	fontSize:0.08,
	textAlign:'center',
	fontWeight:'bold',
	color:'green'
  },
  viewStyle:{
			margin:0.0125,
			width: 0.2,
			
			alignItems:'center',
			}
});