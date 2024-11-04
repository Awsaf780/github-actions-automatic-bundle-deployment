// const fs = require('fs');

// const target = process.env.TARGET;

// const config = JSON.parse(fs.readFileSync(`config/${target}.json`, 'utf8'));
// const deployConfig = JSON.parse(fs.readFileSync('deploy.json', 'utf8'));

// console.log('Config from File');
// console.log(config)

// console.log('Deploy Config from File');
// console.log(deployConfig)

const fs = require('fs');

/**
 * Strategies for deploying
 */
const deployStrategies = {

  /**
   * Elastic Beanstalk Deploy
   */
  beanstalk: (config, target) => {
    // if (!config) {
    //   try {
    //     config = JSON.parse(fs.readFileSync('highcharts.cloud.deploy.json', 'utf8'));
    //   } catch (e) {
    //     console.log('Error when parsing deploy config:', e);
    //   }
    // };
    const deployTarget = target || 'test';
    console.log('deploy config targets', config.targets);

    console.log('Input Target Key', deployTarget);
    console.log('Available Keys in config', Object.keys(config.targets));
    const deployConfig = config.targets[deployTarget];

    if (!deployConfig) throw new Error(`Deploy Target "${deployTarget}" not available in config (deploy.json)`);
    console.log('The deploy json')
    console.log(deployConfig);
    // return bundleBackend()
    //   .then((res) => beanstalk.uploadToS3(deployConfig, res))
    //   .then(({ s3Key, versionLabel }) => beanstalk.createApplicationVersion(deployConfig, versionLabel, s3Key))
    //   .then((versionLabel) => beanstalk.updateEnvironment(deployConfig, versionLabel))
    //   .catch((error) => {
    //     console.log('Deployment failed', error);
    //   });
  },

};

////////////////////////////////////////////////////////////////////////////////

config = JSON.parse(fs.readFileSync('deploy.json', 'utf8'));
const target = process.env.TARGET;
deployStrategies['beanstalk'](config, target);
