import consumer from "../config/kafka.js";
import {insertMeasurement} from "./data-provider.js";
import {parseMessage} from "../common/message.js";
import {getMeasurement} from "../common/mapper.js";

export const consume = async (topic) => {
    if (!topic) throw new Error(`Invalid message type.`)

    await consumer.subscribe({
        topic: topic,
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const jsonMessage = parseMessage(message.value)
            const measurement = getMeasurement(jsonMessage.payload);
            await insertMeasurement(measurement)
        },
    })

}
