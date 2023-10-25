import { select } from '@inquirer/prompts';
import { v2 as cloudinary } from 'cloudinary'

const answer = await select({
  message: 'Select a CDN Provider To Deploy On',
  choices: [
    { name: 'Cloudflare CDN', value: 'clf' },
    { name: 'Cloudinary CDN', value: 'cln' },
    { name: 'Other CDN', value: 'otn' },
  ],
});

function cloudinaryCDN(){
    
    // The cloudinary config is only done if this function is called
    cloudinary.config({ 
        cloud_name: 'sample', 
        api_key: '874837483274837', 
        api_secret: 'a676b67565c6767a6767d6767f676fe1',
        secure: true
      });




}

function cloudflareCDN(){


} 