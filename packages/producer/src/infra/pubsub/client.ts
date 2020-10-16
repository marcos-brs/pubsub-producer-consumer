import { PubSub } from '@google-cloud/pubsub';

const pubSubClient = new PubSub({
  projectId: process.env.PUBSUB_CLIENT_ID,
});

export default pubSubClient;
