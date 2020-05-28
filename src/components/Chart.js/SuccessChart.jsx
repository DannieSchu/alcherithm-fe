import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useUserPassed, useUserFailed } from '../../hooks/AuthProvider';

const SuccessChart = () => {
  const passed = useUserPassed();
  const failed = useUserFailed();

  const data = {
    datasets: [
      {
        data: [passed, failed],
        backgroundColor: [
          'rgba(48, 232, 159, 0.6)',
          'rgba(49, 232, 232, 0.6)'
        ],
        hoverBackgroundColor: 'rgba(48, 198, 232, 0.6)'

      }
    ],

    labels: ['Passed', 'Failed']
  };

  return (
    <section>
      <Doughnut
        data={data}
        options={{
          title:{
            display:true,
            text:'Your Success Rate',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </section>
    
  )

}

export default SuccessChart;
