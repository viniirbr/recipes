import {React, useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
    
    let [input, setInput] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);

    };
    
    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input 
            onChange={(e)=> setInput(e.target.value)} 
            type='text' 
            value={input}/>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0rem 8rem;
    position: relative;

    input {
        border: none;
        width: 100%;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 0.7rem;
        outline: none;
    }

    svg {
        position: absolute;
        color: white;
        top: 50%;
        transform: translate(100%, -50%);
    }
`

export default Search