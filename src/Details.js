import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 


class Details extends Component {
    constructor(props) { 
        super(props); 
        this.state = { projects: [],
           usernameHeader: ""}; 
    } 
    componentDidMount(){
        //eslint-disable-next-line
        console.log(this.props);
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/${params.name}/readme`)
        .then(p => this.setState(() => ({
            projects: p.name, 
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }
}
export default Details;