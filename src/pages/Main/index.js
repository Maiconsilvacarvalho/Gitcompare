import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';
import logo from '../../essets/logo.jpg';
import { Container, Form } from './style';
import CompareList from '../../componentes/CompareList';

export default class Main extends Component{
    state = {
        repositoryInput: '',
        repositories: [],
    };

    handleAddRepository = async (e) =>{
        e.preventDefault();

        try {
            const {data: repository} = await api.get(`/repos/${this.state.repositoryInput}`);

            repository.lastCommit = moment(repository.pushe_at).fromNow();

                this.setState({
                    repositoryInput:'',
                    repositories:[...this.state.repositories, repository],
                });
        } catch (error) {
            console.log(error);
        }
    };

    render(){
        return (
            <Container>
            <div>
                <img src={logo} alt="Github Compare"/>
             </div>
                <Form onSubmit={this.handleAddRepository}>
                    <input type="text" placeholder="usuário/repositório" value={this.state.repositoryInput}
                    onChange={ e => this.setState({repositoryInput: e.target.value})} />
                    <button type="submit">Ok</button>
                </Form>
            <CompareList repositories={this.state.repositories}/>
            </Container>
        );
    }

}


