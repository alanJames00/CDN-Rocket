import { select } from '@inquirer/prompts';
import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
import { Spinner } from 'cli-spinner';

var spinner = new Spinner(` %s Uploading The File To CDN`);
spinner.setSpinnerString( "⣾⣽⣻⢿⡿⣟⣯⣷");
spinner.start();

config(); // dotenv config fn call.

const filename = process.argv[2]; // access the filename or filepath as a command-line argument

const answer = await select({
  message: 'Select a CDN Provider To Deploy On',
  choices: [
    { name: 'Cloudflare CDN', value: 'cloudflare' },
    { name: 'Cloudinary CDN', value: 'cloudinary' },
    { name: 'Other CDN', value: 'otn' },
    { name: 'Exit Program', value: 'exit' },
  ],
});

switch(answer){

    case 'exit':
        programExit();
        break;
    case 'cloudinary':
        cloudinaryCDN();
        programExit();
        break;
    case 'cloudflare':
        cloudflareCDN();
        programExit();
        break;
}

function programExit(){
    // Function to handle program exit
    console.log('Exiting the Program...');
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
        .upload(filename)
        .then(result=>console.log(result));

}

function cloudflareCDN(){


} 