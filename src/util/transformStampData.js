export const createMultiList = (arr) => {
  let multiList = {};

  arr.forEach(item => {
    let current = multiList[item] || 0;
    multiList = { ...multiList, [item]: current + 1 }
  });

  return multiList;
}

export const shapeStampData = (data) => {
  return {
    'Release Year': createMultiList(data.map(person => person['Release Year']).join(', ').split(', ')),
    'Gender': createMultiList(data.map(person => person['Gender'])),
    'Profession': createMultiList(data.map(person => person['Profession']).join(', ').split(', ')),
    'Race': createMultiList(data.map(person => person['Race'])),
    'Sun Sign': createMultiList(data.map(person => person['Sun Sign'])),
    'LGBTQ': createMultiList(data.map(person => person['LGBTQ'])),
    'State of Birth': createMultiList(data.map(person => person['State of Birth'])),
    'Country of Birth': createMultiList(data.map(person => person['Country of Birth'])),
    'Horrors': {
      'Eugenicist': data.filter(person => person['Eugenicist'] === 'Yes').length,
      'Embezzler': data.filter(person => person['Embezzler'] === 'Yes').length,
      'Child SA': data.filter(person => person['Child SA'] === 'Yes').length,
      'DV': data.filter(person => person['DV'] === 'Yes').length,
      'Enslaver': data.filter(person => person['Enslaver'] === 'Yes').length,
      'Known Racist': data.filter(person => person['Known Racist'] === 'Yes').length,
      'None': data.filter(person => person['Eugenicist'] !== 'Yes'
                                      && person['Embezzler'] !== 'Yes'
                                      && person['Child SA'] !== 'Yes'
                                      && person['DV'] !== 'Yes'
                                      && person['Enslaver'] !== 'Yes'
                                      && person['Known Racist'] !== 'Yes').length,
    },
  };
};
