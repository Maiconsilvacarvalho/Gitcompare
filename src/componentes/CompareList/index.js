import React from 'react';
import propTypes from 'prop-types';
import { Container, Repository } from './style';


const CompareList = ({repositories}) => (
    <Container>
        {repositories.map(repository => (
            <Repository key={repository.id}>
            <header>
                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
        <strong>{repository.name}</strong>
                <small>{repository.owner.login}</small>
                <ul>
                    <li>
                    {repository.stargazers_count} <small>stars</small>
                    </li>
                    <li>
                    {repository.forks_count} <small>forks</small>
                    </li>
                    <li>
                    {repository.open_issues_count} <small>issues</small>
                    </li>
                    <li>
                    {repository.lastCommit} <small>last commit</small>
                    </li>


                </ul>
            </header>
        </Repository>
        ))}



    </Container>
);

CompareList.propTypes = {
    repositories: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        owner: propTypes.shape({
            login: propTypes.string,
            avatar_url: propTypes.string,
        }),
        stargazers_count: propTypes.number,
        forks_count: propTypes.number,
        open_issues_count: propTypes.number,
        pushed_at: propTypes.string,
    })).isRequired,
}

export default CompareList;
