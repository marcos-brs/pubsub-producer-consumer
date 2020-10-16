import IPublisher from '../../dtos/IPublisher';

class Producer {
  constructor(private usersPublisher: IPublisher) {}

  async generic(operation: string, message: string): Promise<void> {
    const data = {
      message,
    };

    this.usersPublisher.publish(operation, data);
  }
}

export default Producer;
