import readline from 'readline';
import Publisher from './infra/pubsub/publisher';
import Producer from './infra/pubsub/producer';

const publisher = new Publisher();
const producer = new Producer(publisher);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', () => {
  console.log('\nMessage sended!!!');
});

rl.question('message? ', function (message: string) {
  producer.generic('send', message);
  rl.close();
});
