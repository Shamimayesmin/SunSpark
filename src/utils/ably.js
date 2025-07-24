import Ably from 'ably';


const ablyClient = new Ably.Realtime("HssGzg.kTcrqg:J_v6NCIi1hJ_B65SjUoFO3NteudXiMa1QqRotCU2f0U");

export const subscribeToChannel = (channelName, event, callback) => {
  const channel = ablyClient.channels.get(channelName);
  channel.subscribe(event, (message) => {
    callback(message);
  });
};

export const unsubscribeFromChannel = (channelName) => {
  const channel = ablyClient.channels.get(channelName);
  channel.unsubscribe();
};
