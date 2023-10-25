import { select } from '@inquirer/prompts';
import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';

config(); // dotenv config fn call.

const filename = process.argv
console.log(filename);

const answer = await select({
  message: 'Select a CDN Provider To Deploy On',
  choices: [
    { name: 'Cloudflare CDN', value: 'clf' },
    { name: 'Cloudinary CDN', value: 'cln' },
    { name: 'Other CDN', value: 'otn' },
    { name: 'Exit Program', value: 'exit' },
  ],
});

switch(answer){

    case 'exit':
        console.log('Exiting the Program...');
        break;
    case 'cln':
        cloudinaryCDN();
        break;
}

function cloudinaryCDN(){

    // The cloudinary config is only done if this function is called
    cloudinary.config({ 
        cloud_name: 'dkvokrqkc',
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true
      });
      
      // Uploader Function
      cloudinary.uploader
        .upload()
        .then(result=>console.log(result));

}

function cloudflareCDN(){


} 