import { select } from '@inquirer/prompts';
import rawlist from '@inquirer/select';

const answer = await select({
  message: 'Select a CDN Provider To Deploy On',
  choices: [
    { name: 'Cloudflare CDN', value: 'clf' },
    { name: 'Cloudinary CDN', value: 'cln' },
    { name: 'Other CDN', value: 'otn' },
  ],
});