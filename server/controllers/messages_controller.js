const idAssigner = 0;
const messageArr = [];

module.exports = {
  createMessage: (req, res) => {
    const { text, time } = req.body;
    let messObj = {
      id: idAssigner,
      text: text,
      time: time,
    };
    messageArr.push(messObj);
    idAssigner++;
    res.status(201).send(messageArr);
  },
  readMessage: (req, res) => {
    res.status(200).send(messageArr);
  },
  updateMessage: (req, res) => {
    const { text } = req.body;
    const params = +req.params;
    let messageIndex = messageArr.findIndex((ele) => ele.id === params);
    messageArr[messageIndex].text = text;
    res.status(200).send(messageArr);
  },
  deleteMessage: (req, res) => {
    const params = +req.params;
    let messageIndex = messageArr.findIndex((ele) => ele.id === params);
    messageArr.splice(messageIndex, 1);
    res.status(200).send(messageArr);
  }
};
