import React,{Component} from 'react'
import PlayerComponent from "../components/PlayerComponent";
import {connect} from 'react-redux'

export default class PlayerContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <PlayerComponent/>
        );
    }
}