import React, {Component} from 'react';

class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
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

            this.setState({user: user, isLoading: false});
        })
    }

    render() {
        const { user, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
          }

        return (
            <div>
                {user}
            </div>
        )
    }
}

export default RandomUser;