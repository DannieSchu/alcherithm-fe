import React from 'react';
import { Pie } from 'react-chartjs-2';

const PassedByCategoryChart = () => {
  const userSolutionsByCategory = usePassingSolutionsByCategory();
  const passed = useUserPassed();
  const failed = useUserFailed();
  const attempted = useUserAttempted();
  const total = useUserTotal();
  
  console.log(userSolutionsByCategory);
  console.log('passed: ' + passed);
  console.log('failed: ' + failed);
  console.log('attempted: ' + attempted);
  console.log('total: ' + total);

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
    labels: ['forEach', 'variables', 'sort', 'string methods', 'object iteration', 'map', 'filter', 'reduce', 'nested for loops']
  };

  return (
    <section>
      <Pie 
        data={}
        options={}
      />
    </section>
  )
}