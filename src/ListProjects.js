import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types';
class ListProjects extends Component {
    constructor(props){
        super(props);
        this.state = {Projects:[]};
    }
    
    backHandle(e){
        e.preventDefault();
        this.props.onBackHandle(this.props.history);
    }

    componentDidMount(){
        //eslint-disable-next-line
        console.log(this.props);
        const{
            match: {params}
        } = this.props;

        axios.get(`https://api.github.com/users/${params.username}/repos`).then(Projects => this.setState(()=>({
            Projects: Projects.data
        }))).catch(err => console.log(err.message)); //eslint-disable-line
    }

    clickProject(id, projectName, user){
        console.log(`projectName: ${projectName} - id: ${id} - user: ${user}`); //eslint-disable-line
        if(this.props.onClickProject && projectName && id && user)
            this.props.onClickProject(this.props.history, user, id, projectName);
    }
    render(){
        return (
            <div>
                <Header usernameHeader={this.props.match.params.username} backHandle={this.backHandle.bind(this)}/>
                <div className="container list">
                        <h4>Projects</h4>
                    <section className="eight offset-by-two columns" style={{boxShadow: ' 0 3px 30px 0 , 0 3px 3px 0'}}> 
                    {this.state.Projects.map((data) =>
                                <ul  className="list"  key={data.id}>
                                    <button onClick={this.clickProject.bind(this,data.id,data.name,data.owner.login)} style={{border: 'none'}}>
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
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onBackHandle: PropTypes.func.isRequired,
    onClickProject: PropTypes.func.isRequired
};

export default ListProjects;