import { SpaceMembersUpdateEvent } from '../../Space';

const enterPresenceMessage = {
  clientId: '1',
  data: {},
  action: 'enter',
  connectionId: '1',
  id: '1',
  encoding: 'json',
  timestamp: 1,
};

const updatePresenceMessage = {
  ...enterPresenceMessage,
  data: { a: 1 },
  action: 'update',
};

const leavePresenceMessage = {
  ...enterPresenceMessage,
  action: 'leave',
};

const createPresenceMessage = (type, override?) => {
  switch (type) {
    case 'enter':
      return { ...enterPresenceMessage, ...override };
    case 'update':
      return { ...updatePresenceMessage, ...override };
    case 'leave':
      return { ...leavePresenceMessage, ...override };
    default:
      throw new Error(`Invalid test event type argument: ${type}`);
  }
};

const createPresenceEvent = (type, override?) => {
  return new SpaceMembersUpdateEvent(createPresenceMessage(type, override));
};

export { createPresenceMessage, createPresenceEvent };
