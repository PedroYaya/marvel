import axios from 'axios'
import { ENDPOINT } from '@/api/config'

export default function() {
  return axios.get(ENDPOINT.CHARACTERS).then(result => {
    return result.data.data.results;
  });
}