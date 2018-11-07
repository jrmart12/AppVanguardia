import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types';
class ListProjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            Projects:[],
            usernameHeader:"",
            readme:""
        };
    }

    componentDidMount(){
        //eslint-disable-next-line
        console.log(this.props);
        const{
            match: {params}
        } = this.props;

        axios.get(`https://api.github.com/users/${params.username}/repos`).then(Projects => this.setState(()=>({
            Projects: Projects.data,
            usernameHeader:params.username
        }))).catch(err => console.log(err.message)); //eslint-disable-line
    }

    handleSubmit(){
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/${params.name}/readme`)
        .then(p => this.setState(() => ({
            readMe: p.name, 
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    render(){
        return (
            <div>
                <Header usernameHeader={this.state.usernameHeader}/>
                <div className="container list">
                        <h4>Projects</h4>
                    <section className="eight offset-by-two columns" style={{boxShadow: ' 0 3px 30px 0 , 0 3px 3px 0'}}> 
                    {this.state.Projects.map((data) =>
                                <ul  className="list"  key={data.id}>
                                    <button onSubmit={this.handleSubmit} style={{border: 'none'}}>
                                        {data.name}
                                    </button>
                                </ul>
                            )}
                            
                    </section>
                </div>
            </div>
        )
     }
}

ListProjects.propTypes = {
    match: PropTypes.object.isRequired
};

export default ListProjects;