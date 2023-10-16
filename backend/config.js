import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGODB_URL: process.env.MONGODB_URI || 'mongodb://localhost/frontend',

  CLOUDINARY_CLOUD_NAME: process.env.name || 'name',
  CLOUDINARY_API_KEY: process.env.key || 'apiKey',
  CLOUDINARY_API_SECRET: process.envCloudinary || 'secretAccessKey',
  CLOUDINARY_URL: process.env.cloudinary || 'secretKey',

  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'your_stripe_secret_key',
  STRIPE_PUBLISHABLE_KEY:
    process.env.STRIPE_PUBLISHABLE_KEY || 'your_stripe_publishable_key',

  auth: process.env.NODE_USER,
  auth: process.env.NODE_PASSWORD,
};
