import React from 'react';
import { usePassingSolutionsByCategory } from '../../../hooks/AuthProvider';
import { Pie } from 'react-chartjs-2';

const PassedByCategoryChart = () => {
  const userSolutionsByCategory = usePassingSolutionsByCategory();

  const categories = ['forEach', 'variables', 'sort', 'string methods', 'object iteration', 'map', 'filter', 'reduce', 'nested for loops'];

  const categoryCounts = categories.map(category => {
    const foundCategory = userSolutionsByCategory.find(obj => obj._id ===  category);
    if(!foundCategory) {
      return ({ _id: category, count: 0 });
    }
    return foundCategory;
  });

  const counts = categoryCounts.map(solution => {
    return solution.count;
  });

  const labels = categoryCounts.map(solution => {
    return solution._id;
  });
  
  const data = {
    datasets: [
      {
        data: counts,
        backgroundColor: [
          'rgba(48, 232, 159, 0.6)',
          'rgba(49, 232, 232, 0.6)',
          'rgba(48, 198, 232, 0.6)',
          'rgba(48, 232, 159, 0.6)',
          'rgba(49, 232, 232, 0.6)',
          'rgba(48, 198, 232, 0.6)',
          'rgba(48, 232, 159, 0.6)',
          'rgba(49, 232, 232, 0.6)',
          'rgba(48, 198, 232, 0.6)',
        ],
        hoverBackgroundColor: '#E6DB74'
      }
    ],
    labels
  };

  return (
    <section style={{ width: '100%', maxWidth: '500px' }}>
      <Pie 
        data={data}
        options={{
          title:{
            display:true,
            text:'Successful Challenges by Category',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right',
          }
        }}
      />
    </section>
  );
};

export default PassedByCategoryChart;
