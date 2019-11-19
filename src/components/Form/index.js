import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        age: '',
        firstNameValid: false,
        lastNameValid: false,
        phoneValid: false,
        genderValid: false,
        ageValid: false,
        formValid: false
    }

    validateForm() {
        this.setState({formValid: this.state.firstNameValid &&
                            this.state.lastNameValid &&
                            this.state.phoneValid &&
                            this.state.genderValid &&
                            this.state.ageValid});
}

    validateProperty(fieldName, value) {
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let phoneValid = this.state.phoneValid;
        let genderValid = this.state.genderValid;
        let ageValid = this.state.ageValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.match(/^[A-Za-z]+$/);
                break;
            case 'lastName':
                lastNameValid = value.match(/^[A-Za-z]+$/);
                break;
            case 'phone':
                if(value.match(/^[0-9]+$/) && value.length === 10) {
                phoneValid = true;
                }
                break;
            case 'gender':
                if(value === 'male' || value === 'female') {
                    genderValid = true;
                }
                break
            case 'age':
                if(typeof value == 'number' && value > 0 && value < 120) {
                    ageValid = true;
                }
                break
            default:
                break;
        }

        this.setState({
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            phoneValid: phoneValid,
            genderValid: genderValid
        }, this.validateForm)

    setTimeout(() => {
        this.setState({
            ageValid: ageValid
        },this.validateForm)
    }, 1500);
    }

    onPropertyChange = (e) => {
        const name = e.target.name;
        const value = name !== 'age' ? e.target.value : Number(e.target.value);
            console.log(value);
        this.setState({
            [name]: value
        },
        () => { this.validateProperty(name, value) });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.firstName, this.state.lastName, this.state.phone, this.state.gender, this.state.age )
        this.setState( {
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        age: '',
        firstNameValid: false,
        lastNameValid: false,
        phoneValid: false,
        genderValid: false,
        ageValid: false,
        formValid: false
        })
    }

    render() {
        const { firstName, lastName, phone, gender, age} = this.state;
        const clazz = 'form-control'
        const clazzErr = 'form-control is-invalid'
        return (
        <div className="form col-3">
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' 
                    value={ firstName } 
                    onChange={ this.onPropertyChange } 
                    name='firstName' 
                    className = {!this.state.firstNameValid && firstName.length !== 0 ? clazzErr : clazz} />
                </div>

                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                    value={ lastName } 
                    onChange={ this.onPropertyChange } 
                    name='lastName' 
                    className = {!this.state.lastNameValid && lastName.length !== 0 ? clazzErr : clazz} />
                </div>

                <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text'
                    value={ phone } 
                    onChange={ this.onPropertyChange } 
                    name='phone' 
                    className = {!this.state.phoneValid && phone.length !== 0 ? clazzErr : clazz} />
                </div>

                <div className='form-item'>
                    <label htmlFor='gender'>Gender</label>
                    <select value={ gender } 
                    onChange={this.onPropertyChange} 
                    name='gender' 
                    className={!this.state.genderValid && gender.length !== 0 ? clazzErr : clazz}>
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' 
                    value={ age } 
                    onChange={ this.onPropertyChange } 
                    name='age' 
                    className={!this.state.ageValid && age.length !== 0 ? clazzErr : clazz}/>
                </div>

                <button disabled={!this.state.formValid} className='btn btn-primary'>
                    Add Item
                </button>
            </form>
        </div>
    )
    }
}
