const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
  const logFolderName = path.join(__dirname, 'Logs');

  try {
    if (!fs.existsSync(logFolderName)) {
      await fs.promises.mkdir(logFolderName);
    }
    const logFileName = path.join(logFolderName, 'eventLogs.txt');
    await fs.promises.appendFile(logFileName, logItem);
    console.log('Log successfully written to file');
  } catch (err) {
    console.error('Failed to write log', err);
  }
};

module.exports = logEvents;
