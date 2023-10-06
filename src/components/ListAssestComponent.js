import React, { useEffect, useState } from 'react'
import AssestService from '../services/AssestService'
import { Link } from 'react-router-dom'

const ListAssestComponent = () => {

    const [assests, setAssests] = useState([])

    useEffect(() => {
        getAllAssests();
    }, [])


    const getAllAssests = () => {

        AssestService.getAllAssests().then((response) => {
            setAssests(response.data)
            console.log(response.data)

        }).catch(error => {
            console.log(error);
        })
    }

    const deleteAssest = (employeeId) => {
        AssestService.deleteAssest(employeeId).then((response) => {
            getAllAssests();
        }).catch(error => {
            console.log(error);
        })
    }

    const cloneAssest = (employeeId) => {
        AssestService.cloneAssest(employeeId).then((response) => {
            getAllAssests();
        }).catch(error => {
            console.log(error);
        })

    }
    return (

        <div className="container">
            <h2 className="text-center">AssestList </h2>
            <Link to="/add-employee" className="btn btn-primary mb-2">Add Assest</Link>
            <table className="table table-bordered table-stripped">
                <thead>
                    <th>Assest Id</th>
                    <th>Assest First Name</th>
                    <th>Assests</th>
                    <th>Location</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        assests.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.Assests}</td>
                                    <td>{employee.Location}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteAssest(employee.id)} style={{ margin: "10px" }}>Delete</button>
                                        <button className='btn btn-danger' onClick={() => cloneAssest(employee.id)} style={{ margin: "10px" }}>clone</button>

                                    </td>

                                </tr>
                        )
                    }
                </tbody>


            </table>


        </div>




    )
}

export default ListAssestComponent