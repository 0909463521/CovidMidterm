import React, {useEffect, useState} from 'react';

import {Line} from 'react-chartjs-2'
const axios = require('axios').default;







const VietNam = () => {
    
    
    const [patients, setPatients] = useState([]);

    useEffect(() => {
            
        axios.get('https://td.fpt.ai/corona/corona-chart-vn.json')
        .then(function (response) {
          
          
          setPatients(response.data)
          
        })
        .catch(function (error) {
         
          console.log(error);
        })
        .then(function () {
          
        });
     }, []);
  
  
     
    const PatientsList = () => (
      
        <div className="App">
        {
          
        
           <Line
            data = {
              {
                
                labels:  Object.keys(patients).map((key)=>key),
                datasets:[{
                      data: Object.keys(patients).map((key)=>patients[key][0]),
                      label:"Số ca nhiễm",
                     
                      fill:true
                },
                {
                      data: Object.keys(patients).map((key)=>patients[key][1]),
                      label:"Nghi nhiễm",
                     
                      fill:true
                },
                {
                      data: Object.keys(patients).map((key)=>patients[key][2]),
                      label:"Đã phục hồi",
                    
                      fill:true
                }
                ]
              }
            }

           />

        }
      		
     </div>
        
      );
      return <PatientsList></PatientsList>
}
export default  VietNam