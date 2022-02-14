import * as api from '../api/api';

export const getOffers = (collection, offers) => {
  offers.value = [];
  api.get(
    'offers',
    { collection: collection },
    ({ data }) => {
      offers.value.push(data.data);
    },
    (error) => console.log(error)
  );
};