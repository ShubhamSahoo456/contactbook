import react from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector,useDispatch } from 'react-redux';


const Home = ()=>{

    const contacts = useSelector(state=>state);
    const dispatch =useDispatch();
    console.log(contacts);
    

     const deleteItem =(id)=>{
        // console.log(id);
       
        dispatch({type : "DELETE_CONTACT", payload:id});

    }

    return(
        <>
        <NavLink to="/addcontact" >
        <Button variant="contained" color="primary" className="btnAdd">
            Add Contact
        </Button>
        </NavLink>

        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Actions</th>
            </thead>
            <tbody>
            {
                contacts.map((contact,index)=>{

                    console.log(contact);
                    return(
                        <>
                        <tr key={index}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        <td>
                            <NavLink to={`/editcontact/${contact.id}`}>
                            <Button variant="contained" color="primary" className="action_btn" >
                                    edit
                            </Button>
                            </NavLink>
                            <Button variant="contained" color="secondary" className="action_btn" onClick={()=>deleteItem(contact.id)}>
                                    delete
                            </Button>
                            
                        </td>
                        </tr>
                        </>
                    )
                })
                
            }
            </tbody>
        </table>
        </>
    )
}

export default Home;