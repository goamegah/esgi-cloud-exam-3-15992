require('dotenv').config();

module.exports = {
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: process.env.AWS_ENDPOINT, // TODO
    bucket: process.env.AWS_BUCKET , // TODO
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};