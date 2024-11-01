const fs = require('fs');

const configJson = process.env.CLOUD_CONFIG;
const deployJson = process.env.CLOUD_DEPLOY;

if (!configJson || !deployJson) {
  console.error('configs are not set');
  process.exit(1);
}

try {
  const config = JSON.parse(configJson);
  console.log('config');
  console.log(config);
  fs.writeFileSync('highcharts.cloud.config.json', JSON.stringify(config, null, 2));

  const deployConfig = JSON.parse(deployJson);
  console.log('deployConfig');
  console.log(deployConfig);
  fs.writeFileSync('highcharts.cloud.deploy.json', JSON.stringify(deployConfig, null, 2));
  console.log('highcharts.cloud.config.json & highcharts.cloud.deploy.json has been created');
} catch (error) {
  console.error('Failed to parse configs', error);
  process.exit(1);
}