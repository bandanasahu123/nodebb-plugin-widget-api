const Topics = require.main.require('./src/topics')

async function createTopic (payload) {
  return new Promise(function (resolve, reject) {
    Topics.post(payload)
      .then(topicObj => {
        return resolve(topicObj)
      })
      .catch(error => {
        console.log(
          '------------ Error in creating topic. ------------------',
          error
        )
        return reject({
          status: 400,
          message: 'Error in creating topic.',
          error: error
        })
      })
  })
}

async function replyTopic (payload) {
  return new Promise(function (resolve, reject) {
    Topics.reply(payload)
      .then(topicObj => {
        return resolve(topicObj)
      })
      .catch(error => {
        console.log('------------ Error in replying topic ------------', error)
        return reject({
          status: 400,
          message: 'Error in replying the topic.',
          error: error
        })
      })
  })
}

module.exports = {
  createTopic,
  replyTopic
}
