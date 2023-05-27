const fs = require('fs');

module.exports = {
  params: ({ args }) => {
    if (!args.rootDirectory || !args.projectName || !args.config) {
      return Promise.reject('パラメータが足りません')
    }
    const configData = JSON.parse(fs.readFileSync(args.config, 'utf-8'));
    if (!configData) {
      return Promise.reject('configファイルが読み込めません')
    }
    return {
      rootDirectory: args.rootDirectory,
      projectName: args.projectName,
      entity: configData
    }
  }
}
