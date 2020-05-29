import React from 'react';
import { usePassingSolutionsByCategory } from '../../hooks/AuthProvider';
import { Pie } from 'react-chartjs-2';

const PassedByCategoryChart = () => {
  const userSolutionsByCategory = usePassingSolutionsByCategory();

  const categories = ['forEach', 'variables', 'sort', 'string methods', 'object iteration', 'map', 'filter', 'reduce', 'nested for loops'];

  const counts = userSolutionsByCategory.map(solution => {
    return solution.count;
  });

  const labels = userSolutionsByCategory.map(solution => {
    return solution._id;
  })

  const newArray = categories.map(category => {
    const foundCategory = userSolutionsByCategory.find(obj => obj._id ===  'category');
    if(!foundCategory) {
      return ({ _id: category, count: 0 })
    }
    return foundCategory;
  })

  

  console.log(userSolutionsByCategory);
  

  const data = {
    datasets: [
      {
        data: [counts],
        backgroundColor: [
          'rgba(48, 232, 159, 0.6)',
          'rgba(49, 232, 232, 0.6)'
        ],
        hoverBackgroundColor: 'rgba(48, 198, 232, 0.6)'
      }
    ],
    labels: [labels]

  };

  return (
    <section>
      <Pie 
        data={counts}
        options={labels}
      />
    </section>
  )
}