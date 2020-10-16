import { Topic } from '@google-cloud/pubsub';
import IPublisher from '../../dtos/IPublisher';
import pubSubClient from './client';

class Publisher implements IPublisher {
  private init: Promise<void>;

  private topicName: string;

  private topic: Topic;

  constructor() {
    this.topicName = 'poc';
    this.init = this.setup();
  }

  async setup(): Promise<void> {
    this.topic = pubSubClient.topic(this.topicName);

    const exists = await this.topic.exists();

    if (!exists[0]) {
      await pubSubClient.createTopic(this.topicName);
    }
  }

  async publish(operation: string, data: any): Promise<void> {
    await this.init;
    const dataBuffer = Buffer.from(JSON.stringify(data));

    this.topic.get((err, topic) => {
      if (topic) {
        topic.publish(dataBuffer, {
          operation,
          origin: 'accounts',
        });
      }
    });
  }
}

export default Publisher;
