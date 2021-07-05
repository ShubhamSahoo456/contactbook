import react, { useEffect ,useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Editcontact =()=>{

const {id}= useParams();
const contacts =useSelector((state)=>state);
const dispatch=useDispatch();
const updateContact =contacts.find((contact)=>contact.id===parseInt(id));


const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[number,setNumber] = useState("");
const history =useHistory();

useEffect(()=>{
    if(updateContact){
        setName(updateContact.name);
        setEmail(updateContact.email);
        setNumber(updateContact.number);
    }
},[updateContact])

const udateData =(e)=>{

    e.preventDefault();

    const checkEmail = contacts.find((contact)=>contact.email===email && contact.id===parseInt(id));
    const checkNumber = contacts.find((contact)=>contact.number===number && contact.id===parseInt(id));

    if(!name || !email || !number){
        return toast.warning('plss fill all fields');
    }

    if(checkEmail){
        return toast.warning('email alredy exists');
    }

    if(checkNumber){
        return toast.warning('number alreday exists');
    }

    let data={
        id:parseInt(id),
        name,
        email,
        number
    }

    dispatch({type : "UPDATE_CONTACT" ,payload : data})
    toast.success('updated successful');
    history.push("/");
}

    return(
        <>
               <div className="main_div">
               <h1>{id}</h1>
                <div className="form_table">
                    <form onSubmit={udateData}>
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
                        <div className="cancel_btn">
                        <input type="submit"
                            className="update_btn"
                            value="Update"
                        />
                        <NavLink to="/" className="cancel">
                        <Button variant="contained" color="secondary" >
                            Cancel
                        </Button>
                        </NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Editcontact;