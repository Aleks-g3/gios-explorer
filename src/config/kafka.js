import {Kafka} from "kafkajs";
import Config from "./config.js";

const kafka = new Kafka({
    clientId: 'gios-updater-app',
    brokers: [Config.KAFKA_HOST]
});

const consumer = kafka.consumer({groupId:(Math.random() + 1).toString(36).substring(7)});
await consumer.connect();

process.on('SIGTERM', async () => consumer.disconnect().then(() => console.log('Kafka producer disconnected.')));

export default consumer;
