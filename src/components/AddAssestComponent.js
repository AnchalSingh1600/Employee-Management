import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';  
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [assest, setAssest] = useState('')
    const [assestId, setAssestId] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

const saveOrUpdateEmployee = (e) => { 
        e.preventDefault();
        
        const employee = {firstName,assest,location}

        if(id){

                EmployeeService.updateEmployee(id, employee).then((response) =>{
                    // navigate('/employees')
                    navigate(`/employees`);
                })
                .catch(error =>{
                    console.log(error);
                });
        }else{

            EmployeeService.createEmployee(employee).then((response) => {

                console.log('response.data',response.data)
    
                // const newEmployeeId = response.data.id;
                // navigate('/employees');
                navigate(`/employees`);
               
            }).catch(error =>{
                console.log(error)
            });
        }
        
}
    useEffect(() =>{
        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setAssest(response.data.assest)
            setLocation(response.data.location)
        }).catch(error =>{
            console.log(error)
        })

    },[])


const title = () =>{

    if(id){
        return <h2 className='text-center'>Update employee</h2>
    }else{
        return <h2 className='text-center'>Add employee</h2>
        
    }
}

  return (
    <div>
        <br /><br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                 <label className='form-label'>Assest ID : </label>
                                 <input type = "text"
                                    placeholder = "Enter Assest ID"
                                    name ="assestId"
                                    className = "form-control"
                                    value = {assestId}
                                    onChange = {(e) => setFirstName(e.target.value)}>
                                    
                                 </input>
                            </div>
                            <div className='form-group mb-2'>
                                 <label className='form-label'>First Name : </label>
                                 <input type = "text"
                                    placeholder = "Enter First Name"
                                    name ="firstName"
                                    className = "form-control"
                                    value = {firstName}
                                    onChange = {(e) => setFirstName(e.target.value)}>
                                    
                                 </input>
                            </div>


                            <div className='form-group mb-2'>
                                 <label className='form-label'>Last Name : </label>
                                 <input 
                                 type = "text"
                                 placeholder = "Enter Last Name"
                                 name ="assest"
                                 className = "form-control"
                                 value = {assest}
                                 onChange = {(e) => setAssest(e.target.value)}>
                                    
                                 </input>
                            </div>

                            <div className='form-group mb-2'>
                                 <label className='form-label'>EmailId : </label>
                                 <input
                                  type = "email"
                                  placeholder = "Enter email Id"
                                  name ="location"
                                  className = "form-control"
                                  value = {location}
                                  onChange = {(e) => setLocation(e.target.value)}
                                 >
                                   
                                 </input>
                            </div>

                            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                            <Link to= "/employees" className ="btn btn-danger">Cancel</Link>
                            
                        </form>
                    </div>
                </div>

            </div>

        </div>
        



    </div>
  )
}

export default AddEmployeeComponent