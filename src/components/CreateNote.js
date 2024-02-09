import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class CreateNote extends Component {
    state={
        users:[],
        usuSeleccionado:'',
        txt_titulo:'',
        txt_contenido:'',
        date:new Date()
    }

    async componentDidMount(){
        const res=await axios.get('http://127.0.0.1:4000/api/usuarios');
        this.setState({
            users:res.data.map(user=>user.username),
            usuSeleccionado:res.data[0].username
        }) 
        //console.log(this.state.users)
        
    }
    onSubmit =async (e)=>{
        e.preventDefault();
        //TODO:ASIGNO A LA ESTRUCTURA LOS VALORES DE LOS CAMPOS
        const nuevaNota={
            title:this.state.txt_titulo,
            content:this.state.txt_contenido,
            date:this.state.date,
            author:this.state.usuSeleccionado
        }
        //TODO:INVOCO AL ENDPOINT, ENVIANDOLE EL CUERPO DE LA ESTRUCUTRA A GUARDAR
        await axios.post('http://127.0.0.1:4000/api/notas',nuevaNota);
        window.location.href='/';
        // console.log(this.state.txt_titulo,this.state.txt_contenido)
    }
    onInputChange=e=>{
        // this.setState({
        //     usuSeleccionado:e.target.value
        // })
        this.setState({
            [e.target.name]:e.target.value
        })
        // console.log(e.target.name,e.target.value)
    }
    onChangeDate=date=>{
        this.setState({date})
    }
    render() {
        return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <h4>Crear Nota</h4>
                {/* SELECCIONAR USUARIO */}
                <div className='form-group'>
                    <select
                    className='form-control'
                    name="usuarioSeleccionado"
                    onChange={this.onInputChange}
                    >
                        {
                            this.state.users.map(us=>
                            <option key={us} value={us}>
                                {us}
                            </option>
                            )

                        }
                    </select>
                </div>
                <div className='form-group mt-2'>
                    <input type='text' className='form-control' placeholder='Ingrese Titulo' name='txt_titulo' onChange={this.onInputChange} required/>
                </div>
                <div className='form-group mt-2'>
                    <textarea
                        name='txt_contenido'
                        className='form-control'
                        placeholder='Ingrese el Contenido'
                        onChange={this.onInputChange}
                        required
                    ></textarea>
                </div>
                <div className='form-group'>
                    <DatePicker className='form-control'
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                <form onSubmit={this.onSubmit}>
                    <button type='submit' className='btn btn-primary mt-2'> 
                        Guardar
                    </button>
                </form>
            </div>
        </div>
        )
    }
}
