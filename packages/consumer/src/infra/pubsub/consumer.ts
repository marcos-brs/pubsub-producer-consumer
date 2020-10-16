import pubSubClient from './client';

interface IMessage {
  data: {
    message: string;
  };
  attributes: {
    operation: string;
    origin: string;
  };
  ack(): void;
}

export default class Consumer {
  constructor() {
    this.setupConsumer();
  }

  async setupConsumer(): Promise<void> {
    const topic = pubSubClient.topic('poc');
    const exists = await topic.subscription('PocSubscription').exists();

    if (!exists[0]) {
      await topic.createSubscription('PocSubscription', {
        retryPolicy: {
          minimumBackoff: {
            seconds: 300,
          },
        },
      });
    }

    const subscription = pubSubClient.subscription('PocSubscription');

    const messageHandler = async (messageData: IMessage): Promise<void> => {
      const message: string = JSON.parse(String(messageData.data));
      const { operation } = messageData.attributes;

      console.log(`operation => ${operation}`);
      console.log(`message => ${message}`);

      messageData.ack();
    };

    subscription.on('message', messageHandler);

    console.log('Consumer is listening messages!');
  }
}
