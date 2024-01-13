import { useContext } from "react";
import { KindEmployeeContext } from "../../contexts/KindEmployeeContext";
import Employee from "./Employee";

const EmployeeList = () => {
    const { employees, isLoading, isError } = useContext(KindEmployeeContext);
    //console.log("Employee : ", employees);
    return (
        <table className="table table-striped caption-top bg-white rounded mt-2">
            <caption className="text-white fs-4">Recent Orders</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First_Name</th>
                    <th scope="col">Last_Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    isLoading === false && employees && employees.length > 0 &&
                    employees.map((item) => {
                        return (
                            <Employee employee={item} key={item.id} />
                        )
                    })
                }
                {
                    isLoading === true &&
                    <tr>
                        <td colSpan="5" style={{ 'textAlign': 'center' }}>
                            Loading...</td>
                    </tr>
                }
                {
                    isError === true &&
                    <tr>
                        <td colSpan="5" style={{ 'textAlign': 'center' }}>
                            Something wrong...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
export default EmployeeList;