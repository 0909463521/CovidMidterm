import React, {useEffect, useState} from 'react';

import {Line} from 'react-chartjs-2'
const axios = require('axios').default;
let camacmoi = [];
let caphuchoi = [];
let cadieutri = [];



let client={}


const VietNam = () => {
    
    
    const [patients, setPatients] = useState([]);

    useEffect(() => {
            // Tạo request lấy thông tin user với ID là 12345
        axios.get('https://td.fpt.ai/corona/corona-chart-vn.json')
        .then(function (response) {
          // handle việc lấy dữ liệu thành công
          
          setPatients(response.data)
          
        })
        .catch(function (error) {
          // handle lỗi
          console.log(error);
        })
        .then(function () {
          // sau khi handle xong dữ liệu hoặc lỗi thì sẽ chạy tiếp code ở trong này.
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
                      borderColor:"#3333ff",
                      fill:true
                },
                {
                      data: Object.keys(patients).map((key)=>patients[key][1]),
                      label:"Nghi nhiễm",
                      borderColor:"#ff0000",
                      fill:true
                },
                {
                      data: Object.keys(patients).map((key)=>patients[key][2]),
                      label:"Đã phục hồi",
                      borderColor:"#00ff00",
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