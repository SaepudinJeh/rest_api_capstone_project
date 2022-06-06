import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return v2.config({
      cloud_name: 'capstone-project-2022',
      api_key: '562635952467649',
      api_secret: 'v-f9uQWrZNtw5pUY3ztDPYzd6GY',
    });
  },
};
