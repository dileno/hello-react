import React, {Component} from 'react';

class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
        .then(results => {
            return results.json();
        })
        .then(data => {
            let user = data.results.map((user) => {
                let userElm = '';
                
                if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture != undefined) {
                    userElm = <div key={user}>
                        <h2>{user.name.first} {user.name.last}</h2>
                        <img src={user.picture.large} alt="" />
                        </div>;
                }
                
                return(userElm)
            });

            this.setState({user: user});
        })
    }

    render() {
        return (
            <div>
                {this.state.user}
            </div>
        )
    }
}

export default RandomUser;