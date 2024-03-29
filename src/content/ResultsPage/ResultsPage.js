import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@carbon/react';
import { CircleSolid} from '@carbon/icons-react';
import './_results-page.scss';

const DataTable = () => {
  const {  kWh_CO2Result,  naturalGas_CO2Result, coal_CO2Result, lpg_CO2Result} = useSelector((state) => state.house);
  const household_result = kWh_CO2Result + naturalGas_CO2Result + lpg_CO2Result
  return (
    <div className="results-container">
      <table>
        <thead>
        <tr>
          <th className='table-top'>
            
          </th>
       
          </tr>

          <tr>
              <th className='table-left' style={{ fontWeight: 'bold', fontSize:'22px', paddingBottom:'46px' }}>SUMMARY</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className='table-left'>{household_result.toFixed(2)> 0 ? (<CircleSolid size={12} className="circle-solid-icon green" />) : (<CircleSolid size={12} className="circle-solid-icon" />)}Household</td>
            <td className='table-right'>{household_result.toFixed(2)}</td>
        </tr>

        <tr>
            <td className='table-left'>{kWh_CO2Result.toFixed(2)> 0 ? (<CircleSolid size={12} className="circle-solid-icon green" />) : (<CircleSolid size={12} className="circle-solid-icon" />)}Electricity</td> 
            <td className='table-right'>{kWh_CO2Result.toFixed(2)}</td>
        </tr>

        <tr>
            <td className='table-left'>{naturalGas_CO2Result.toFixed(2) > 0 ? (<CircleSolid size={12} className="circle-solid-icon green" />) : (<CircleSolid size={12} className="circle-solid-icon" />)}Natural Gas</td>
            <td className='table-right'>{naturalGas_CO2Result.toFixed(2)}</td>
        </tr>

          <tr>
              <td className='table-left'>{coal_CO2Result.toFixed(2) > 0 ? (<CircleSolid size={12} className="circle-solid-icon green" />) : (<CircleSolid size={12} className="circle-solid-icon" />)}Coal</td>
              <td className='table-right'>{coal_CO2Result.toFixed(2)}</td>
          </tr>
          <tr>
              <td className='table-left'>{lpg_CO2Result.toFixed(2) > 0 ? (<CircleSolid size={12} className="circle-solid-icon green" />) : (<CircleSolid size={12} className="circle-solid-icon" />)}LPG</td>
              <td className='table-right'>{lpg_CO2Result.toFixed(2)}</td>
          </tr>
          <tr><td className='table-left'>◯ Private Vehicles</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Car</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Motorbike</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Public Transport</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Bus</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Train</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>○ Taxi</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Flights</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Food & Water</td><td className='table-right'>0</td></tr>
          <tr><td className='table-left'>◯ Results</td><td className='table-right'>0</td></tr>
          <tr>
            <td className='table-button1' colSpan="2">
            <Button kind="tertiary" className='button-results1'>Send results to your email</Button>
            </td>
           
          </tr>
       
          <tr><td className='table-button2'colSpan="2" >
            <Button kind="tertiary" className='button-results2'>Offset your Carbon</Button></td></tr>


        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
