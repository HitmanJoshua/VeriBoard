import React from 'react'
import './Profile.css'

export default class Profile extends React.Component {
    constructor() {
        console.log("function");
        super();
        this.state = {
            user: 'User_957',
            type: 'registered',
            contributions: [{ postId: 'pid_145' }, { postId: 'pid_186' }, { postId: 'pid_201' }],
            created: ['gid_14']
        }
        this.items = this.state.contributions.map((item, key) =>
            <h6>{item.postId}</h6>)
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" />

                <div className="Jumbotron">
                    <div className="card">

                        <table cellSpacing="0">
                            <th>
                                <h1 className="display-3 text-center">VeriBoard</h1></th>
                            <th>
                                <img src="https://image.flaticon.com/icons/png/512/61/61582.png" alt="icon" height="50" width="50" /></th>
                        </table>

                    </div>
                </div>
                <br /><br />
                <div className="container">
                    <img src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="user's DP" width="200" height="150" />
                    <span><h4>User_ID : </h4><h6>{this.state.user}</h6></span>
                    
                </div>
            </div>
        )
    }
}