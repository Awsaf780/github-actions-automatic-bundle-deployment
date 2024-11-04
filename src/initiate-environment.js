const fs = require('fs');

const configJson = process.env.CLOUD_CONFIG;
const deployJson = process.env.CLOUD_DEPLOY;
const target = process.env.TARGET;

if (!configJson || !deployJson) {
  console.error('configs are not set');
  process.exit(1);
}

try {
  const config = JSON.parse(configJson);
  console.log(`config/${target}.json`);
  console.log(config);
  fs.writeFileSync(`config/${target}.json`, JSON.stringify(config, null, 2));

  const deployConfig = JSON.parse(deployJson);
  console.log('deployConfig');
  console.log(deployConfig);
  fs.writeFileSync('deploy.json', JSON.stringify(deployConfig, null, 2));
  
  console.log('target.json & deploy.json has been created');
} catch (error) {
  console.error('Failed to parse configs', error);
  process.exit(1);
}