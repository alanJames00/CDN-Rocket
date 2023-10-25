import { select } from '@inquirer/prompts';
import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';

config(); // dotenv config fn call.

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
        console.log("cdn done");
}

function cloudinaryCDN(){

    // The cloudinary config is only done if this function is called
    cloudinary.config({ 
        cloud_name: 'dkvokrqkc',
        api_key: '874837483274837', 
        api_secret: 'a676b67565c6767a6767d6767f676fe1',
        secure: true
      });




}

function cloudflareCDN(){


} 