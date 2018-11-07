import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 
import ReactMarkdown from 'react-markdown';

class Details extends Component {
    constructor(props) { 
        super(props); 
        this.state = {username: "",name: "",read: [],readme: ""} 
    }

    backHandle(e){
        e.preventDefault();
        this.props.onBackHandle(this.props.history, this.state.username);
    }
    
    componentDidMount(){
        //eslint-disable-next-line
        console.log(this.props);
        const { match: {params} } = this.props;
        axios            .get(`https://api.github.com/repos/${params.username}/${params.name}/readme`)
        .then(read => {
            this.setState(() => ({
                read: read.data
            }));
            let readme = atob(this.state.read.content);
            this.setState(() => ({
                readme: readme
            }));
        })
    }

    render(){
        return (
            <div>
                <Header usernameHeader={this.props.match.params.name} backHandle={this.backHandle.bind(this)}/>
                        <div>
                            <br/>
                            <section className="six offset-by-three columns">
                                <ReactMarkdown 
                                    source={this.state.readme}
                                    includeNodeIndex = {true}
                                />
                            </section>
                        </div>
            </div>
        );
    }

}
Details.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onBackHandle: PropTypes.func.isRequired
}
export default Details;