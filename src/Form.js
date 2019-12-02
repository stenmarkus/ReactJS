import React from "react";

export default class Form extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''

    };
    change = e =>{
        this.props.onChange({ [e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e =>{
        e.preventDefault();
        //this.props.onSubmit(this.state);
        this.props.onChange({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        });
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        });
    }

    render(){
        return(
            <form>
                <input name = "firstName" placeholder = "firstName" value = {this.state.firstName}
                onChange = {e =>this.change(e)}/>
                <br>
                </br>
                <input name = "lastName" placeholder = "lastName" value = {this.state.lastName}
                onChange = {e =>this.change(e)}/>
                <br>
                </br>
                <input name = "username" placeholder = "userName" value = {this.state.username}
                onChange = {e =>this.change(e)}/>
                <br>
                </br>
                <input name = "email" placeholder = "email" value = {this.state.email}
                onChange = {e =>this.change(e)}/>
                <br>
                </br>
                <input name = "password" type = "password" placeholder = "passWord" value = {this.state.password}
                onChange = {e =>this.change(e)}/>
                <br>
                </br>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            
        ) 

    }

}