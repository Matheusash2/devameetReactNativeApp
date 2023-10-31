import { IMessage } from "../models/Message";
import { store } from "../store";
import { Creators as MessageAction } from "../store/reducers/messageData";

const handleMessage = (message: IMessage) => {
    store.dispatch(MessageAction.setMessage(message))
}

export default handleMessage;