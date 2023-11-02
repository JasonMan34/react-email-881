import { render } from '@react-email/render';
import * as express from 'express';
import HelloWorld from '../emails/HelloWorld';

const app = express();

app.get('/', (req, res) => {
  console.log('Generating email\n');
  const email = render(<HelloWorld />);
  console.log(`${email}\n`);

  res.status(200).send();
});

app.listen(8080);
