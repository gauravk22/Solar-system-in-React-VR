import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,CylindricalPanel
} from 'react-vr';

import ModelComponent from './Components/ModelComponent'
import Catalouge from './Components/Catalouge'

export default class task1 extends React.Component {
	
	constructor(props){
		super();
		this.lastUpdate = Date.now();
			this.state={o:'',t:'',opacity:0,transformz:-9,rotation: 0}
			
			this.lastUpdate = Date.now();
			this.handleClick=this.handleClick.bind(this);
			this.handleZoom1=this.handleZoom1.bind(this);
			this.handleZoom2=this.handleZoom2.bind(this);
			this.rotate=this.rotate.bind(this);
	}
	
	
	handleClick(oo,tt){
		
		let i=this.transformz===-9?-6:-9;
		this.setState({
			o:oo,t:tt,opacity:1,transformz:i
		})
	}
	
	handleZoom1(){
		let j=this.state.transformz;
	
		
		this.setState({
			transformz:j+0.1
		})
	}
	
	handleZoom2(){
		let j=this.state.transformz;
		
		this.setState({
			transformz:j-0.1
		})
	}
	
	
	rotate() {
	
		
		const now = Date.now();
		const delta = now - this.lastUpdate;
		
		this.time++;
		
		this.lastUpdate = now;

		this.setState({
			rotation: this.state.rotation + delta / 150
		});
		this.frameHandle = requestAnimationFrame(this.rotate);	
	}
	
  render() {
    return (
      <View>
        
		<Pano source={asset('spacescape.png')}/>
		
		<ModelComponent obj={this.state.o} txture={this.state.t} opa={this.state.opacity} rot={this.state.rotation} tz={this.state.transformz} handleZoom1={this.handleZoom1} handleZoom2={this.handleZoom2} handleRotate={this.rotate}/>
        
		<Catalouge handleClick={this.handleClick}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('task1', () => task1);
