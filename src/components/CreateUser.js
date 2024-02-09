import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
    state={
        user:[],
        username:''
    }

    async componentDidMount(){
        // axios.get(´${process.env.URI}´+'/users');
        this.getUsers();
        console.log(this.state.user);
    }

    getUsers=async ()=>{
        const res=await axios.get('http://127.0.0.1:4000/api/usuarios');
        this.setState({user:res.data});
    }

    onChageUsername=(e)=>{
        this.setState({username: e.target.value})
    }
    onSubmit=async e=>{
        //TODO: EVITA REINICIAR LA PAGINA
        e.preventDefault(); 

        await axios.post('http://127.0.0.1:4000/api/usuarios',{username:this.state.username})
        //TODO: LIMPIO EL CAMPO
        this.setState({username:''})
        //TODO: INVOCO AL METODO, PARA MOSTRAR LOS DATOS
        this.getUsers(); 
    }

    eliminarUsuario=async (id)=>{
        const res=await axios.delete('http://127.0.0.1:4000/api/usuarios/'+id)
        // console.log(id)
        console.log(res)
        //TODO: INVOCO AL METODO, PARA MOSTRAR LOS DATOS
        this.getUsers(); 
    }

    render() {
        return (
        <div className='row'>
            <div className="col-md-4">
                <div className='card card-body'>
                    <h3>Crear nuevo  usuario</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.username}
                                onChange={this.onChageUsername}
                            ></input>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className='list-group'>
                    {
                        this.state.user.map(us=>
                            <li className='list-group-item list-group-item-action'
                            key={us._id}
                            onDoubleClick={()=>this.eliminarUsuario(us._id)}
                            >
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
