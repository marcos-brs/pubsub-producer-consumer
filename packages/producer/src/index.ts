import Publisher from 'infra/pubsub/publisher';
import Producer from 'infra/pubsub/producer';
import readline from 'readline';

const publisher = new Publisher();
const producer = new Producer(publisher);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', () => {
  console.log('\nMessage sended!!!');
});

while (true) {
  rl.question('message? ', (message: string) => {
    producer.generic('send', message);
  });

  rl.close();
}
