import exampleUrl from '../assets/example.txt?url'
import workerUrl from '../worker/worker?url';
console.log(exampleUrl);

new Worker(workerUrl, {type: 'module'});
