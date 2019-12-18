import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,VrButton,Image,
  View,CylindricalPanel,
  Animated,Model,AmbientLight,
  StyleSheet
} from 'react-vr';

export default class ModelComponent extends React.Component{

	constructor(props){
		super(props);
		
		this.state = {
      
		};
		
	}
	
	render(){
		return(
		<View>
		
			<View style={{transform:[{translate:[0.3,0.5,-1]}],
			flexDirection:'row',
			justifyContent: 'space-between',
			opacity:this.props.opa,
			width:0.4
			}} 
			billboarding={'on'}>
		
				<VrButton onClick={this.props.handleZoom1}>
					<View style={
							styles.viewStyle
						}>
						<Text style={styles.sampleStyle}>+</Text>
					</View>
				</VrButton>
				
				<VrButton onClick={this.props.handleZoom2}>
					<View style={
							styles.viewStyle
						}>
						<Text style={styles.sampleStyle}>-</Text>
					</View>
				</VrButton>
				
				<VrButton onClick={this.props.handleRotate}>
					<View style={
							styles.viewStyle
						}>
						<Text style={styles.sampleStyle}>ROTATE</Text>
					</View>
				</VrButton>
		
			</View>
		
			<Animated.View  style={{justifyContent: 'center',
				alignItems: 'center',
				
				width: 0.2,
				height: 0.2,
				transform: [{translate: [0.5, -0.4, 	this.props.tz]}]}}>

				<AmbientLight intensity={2.6}/>
				<Model source={{obj: asset(this.props.obj)}}
					  texture={asset(this.props.txture)}
					  lit={false}
					   style={[{
						  transform: [
						  { rotateY: this.props.rot},
						  {scale: 0.1},
						  
						]}, styles.model]}
					/>

			</Animated.View>
		</View>
		)
	}
}

const styles = StyleSheet.create({
  model: {
    position: 'absolute'
  },
  sampleStyle: {
    
	fontSize:0.02,
	textAlign:'center',
	fontWeight:'bold',
	color:'white'
  },
  viewStyle:{
			marginBottom:0.01,
			width: 0.1,
			backgroundColor:'red',
			alignItems:'center',
			}
});