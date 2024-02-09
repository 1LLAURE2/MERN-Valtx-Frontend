import axios from 'axios'
import React, { Component } from 'react'

export default class NotesList extends Component {
    state={
        notas:[]
    }
    async componentDidMount(){
        const res=await axios.get('http://127.0.0.1:4000/api/notas')
        this.setState({notas:res.data})
        console.log(res)
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
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        )
    }
}
