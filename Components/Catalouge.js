import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,VrButton,Image,
  View,CylindricalPanel,Plane,ScrollView
} from 'react-vr';

import Thumbnail from './Thumbnail'
import data from '../jsonfile/data.json'
import ModelComponent from './ModelComponent'

export default class Catalouge extends React.Component{
    constructor(props){
        super(props);
		
	   this.handleClick=this.handleClick.bind(this);   
    }
	
	
	handleClick(o,t){
		console.log(o);
		this.props.handleClick(o,t)
	}
    
    render(){
     
        const t1 = data.results.map((thumbnail,index) =>
            <Thumbnail
                key={thumbnail.id}
                name={thumbnail.name}
                src={thumbnail.src}
				click={this.handleClick}
				obj={thumbnail.model}
				txture={thumbnail.texture}
            />
            );
      
        return(
		
		
            <View style={{flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
			 
			transform: [
            
            {translate: [-3.2, 1.8, -3]},
          ],
		    width:3,
			height:3,
			overflow:'hidden',
			position:'relative',
			display:'flex'
			}} >

			
			{t1}
				
				
            </View>

            
     
        )
    }
}