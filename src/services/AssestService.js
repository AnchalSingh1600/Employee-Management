import axios from 'axios'

const  EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/Assests';

class AssestService{

    getAllAssests(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createAssest(Assest)
    {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, Assest)
    }

    getAssestById(assestId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+ "/" +assestId);
    }

    updateAssest(assestId, assest)
    {
        return axios.put(EMPLOYEE_BASE_REST_API_URL+"/"+assestId,assest);

    }

    deleteAssest(assestId)
    {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/"+assestId); 
    }

    cloneAssest(assestId){
        return axios.post(EMPLOYEE_BASE_REST_API_URL+"/clone/"+assestId);
    }
}

export default new AssestService();
