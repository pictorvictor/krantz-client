import baseAxios from 'axios';
import Keychain, {UserCredentials} from 'react-native-keychain';

const axios = baseAxios.create({baseURL: 'https://krantz.digital'});

axios.interceptors.request.use(
  async config => {
    try {
      const credentials =
        (await Keychain.getGenericPassword()) as UserCredentials;
      if (credentials?.password) {
        config.headers.Authorization = `Bearer ${credentials.password}`;
      }
    } catch (e: any) {
      throw new Error(e);
    }
    return config;
  },
  error => Promise.reject(error),
);

export default axios;
