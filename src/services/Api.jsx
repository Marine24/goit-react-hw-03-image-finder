import axios from 'axios';

export const getImages = (
  query = '',
  page = 1,
  key = '14257917-642e903e5392097512fece914',
) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=20`,
  );
};
export const w = () => null;
