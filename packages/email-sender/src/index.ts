import { getHelloWorldEmail } from '@workspace/email-templates';

console.log('Getting email body...');
const body = getHelloWorldEmail();
console.log('Email ready!');
console.log(body);
