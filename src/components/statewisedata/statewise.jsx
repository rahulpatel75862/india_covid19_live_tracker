import React, { useEffect, useState } from 'react'
import './statewise.css';

const Statewise = () => {

    const [Data, setData] = useState([]);


    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();

        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <h3 className='mb-5 text-center'><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h3>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <td>State</td>
                                <td>confirmed</td>
                                <td>recovered</td>
                                <td>deaths</td>
                                <td>active</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise