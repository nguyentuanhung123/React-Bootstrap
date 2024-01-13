import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export const KindEmployeeContext = createContext();

const KindEmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            let res = await axios.get("http://localhost:3006/employees");
            let data = res.data || [];

            if (data && data.length > 0) {
                data.map((item) => {
                    item.date_of_birth = moment(item.date_of_birth).format('DD/MM/YYYY');
                    return item
                })
            }
            setEmployees(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
            setIsError(true);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 3000)
        // Optional: Cleanup function
        return () => {
            // Cleanup logic (e.g., cancel the request)
            console.log("Cancel API");
        };
    }, []);

    return (
        <KindEmployeeContext.Provider value={{ employees, setEmployees, isLoading, isError }}>
            {children}
        </KindEmployeeContext.Provider>
    );
};

export default KindEmployeeProvider;