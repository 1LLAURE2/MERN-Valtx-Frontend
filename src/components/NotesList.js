import axios from 'axios'
import React, { Component } from 'react'
import {format} from 'timeago.js';

export default class NotesList extends Component {
    state={
        notas:[]
    }
    componentDidMount(){
        this.obtenerNotas();
        
    }
    async obtenerNotas(){
        const res=await axios.get('http://127.0.0.1:4000/api/notas')
        this.setState({notas:res.data})
    }
    eliminarNota=async (id)=>{
        await axios.delete('http://127.0.0.1:4000/api/notas/'+id);
        this.obtenerNotas();
    }
    render() {
        return (
        <div className='row'>
            {
                this.state.notas.map(notita=>(
                    <div className='col-md-4 mt-3 p-2' key={notita._id}>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Titulo:{notita.title}</h5>
                            </div>    
                            <div className='card-body'>
                                <p>{notita.content}</p>
                                <p>{notita.author}</p>
                                <p>{format(notita.date,"es")}</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' onClick={()=>this.eliminarNota(notita._id)}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        )
    }
}
