var q = 'hibot-channel';

var open = require('amqplib').connect({
  hostname: '127.0.0.1',
  username: 'guest',
  password: 'guest',
  vhost: 'dev',
});

// Publisher
open.then(function (conn) {
  return conn.createChannel();
}).then(function (ch) {
  return ch.assertQueue(q).then(function (ok) {


    return ch.sendToQueue(q, Buffer.from(JSON.stringify({
        data: {
          botId: 'servihabitat-inbound',
          contactId: '5c546b5fb5fe644eb8e384f8',
          conversationId: '5c59133459fff83694875a47',
          wrong: '7',
          statusSurvey: 'send',
          channelId: '5c5361a1998b0e00014fea85',
          message: {
            content: 'Hola buenos días quisiera tener información de algo esto es nuevo 8',
          }
        }
    })));
  });
}).catch(console.warn);

