import { Spinner } from 'cli-spinner';

var spinner = new Spinner(` %s Uploading The File To CDN`);
spinner.setSpinnerString( "⣾⣽⣻⢿⡿⣟⣯⣷");

spinner.start();

setTimeout(() => {
    spinner.stop();
}, 2000);