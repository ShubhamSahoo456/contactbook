import react, { useState } from 'react';
import './addcontact.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Phone } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddContact =()=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");

    const history=useHistory();

    const contacts =useSelector((state)=>state);
    // console.log(contacts);
    const dispatch = useDispatch();

    const checkEmail = contacts.find((contact)=>contact.email===email);
    const checkNumber = contacts.find((contact)=>contact.number===number);

    const formSubmit =(e)=>{
        e.preventDefault();

        if(!name || !email || !number){
            return toast.warning('Plss fill the data');
        
        }
        if(checkEmail){
            return toast.warning('email alredy exists');
        }

        if(checkNumber){
            return toast.warning('number alredy exists');
        }

        

        let data={
            id : (contacts.length)+1,
            name,
            number,
            email
        }
    
    
        dispatch({type : "ADD_CONTACT", payload:data});
        toast.success('contact added successfully');
        history.push("/");
    }

   



    return(
        <>
            <div className="main_div">
                <h1>Add contact</h1>
                <div className="form_table">
                    <form onSubmit={formSubmit}>
                        <input type="text"
                            placeholder="Enter name"
                            className="input_form"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input type="email"
                            placeholder="Enter email"
                            className="input_form"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input type="number"
                            placeholder="Enter phone number"
                            className="input_form"
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                        />
                        <input type="submit"
                            className="input_btn"
                            value="Submit"
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact;