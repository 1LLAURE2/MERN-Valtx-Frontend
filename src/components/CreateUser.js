import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
    state={
        user:[]
    }

    async componentDidMount(){
        // axios.get(´${process.env.URI}´+'/users');
        const res=await axios.get('http://127.0.0.1:4000/api/usuarios');
        this.setState({user:res.data});
        console.log(this.state.user);
    }

    onChageUsername=(e)=>{
        this.setState({username: e.target.value})
    }

    render() {
        return (
        <div className='row'>
            <div className="col-md-4">
                <div className='card card-body'>
                    <h3>Crear nuevo  usuario</h3>
                    <form>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                onChange={this.onChageUsername}
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className='list-group'>
                    {
                        this.state.user.map(us=>
                            <li className='list-group-item list-group-item-action'>
                                {us.username}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        )
    }
}
