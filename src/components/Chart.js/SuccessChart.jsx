import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useUserAttempted, useUserPassed, useUserFailed } from '../../hooks/AuthProvider';

const SuccessChart = () => {
  const passed = useUserPassed();
  const failed = useUserFailed();
  const attempted = useUserAttempted();

  const data = {
    datasets: [
      {
        data: [passed, failed]
      }
    ],

    labels: [
      'Passed'
    ]
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
