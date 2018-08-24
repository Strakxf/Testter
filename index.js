/**
 * @file The starting point of Bastion
 * @author SonnyK (a.k.a Strak)
 * @license GPL-3.0
 */

const Tesseract = xrequire('tesseract');
const configurations = xrequire('./settings/config.json');
const Manager = new Tesseract.ShardingManager('./bastion.js', {
  totalShards: configurations.shardCount,
 client.login(process.env.BOT_TOKEN);
});
const log = xrequire('./handlers/logHandler');

Manager.spawn();

Manager.on('launch', shard => {
  log.info(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${Manager.totalShards} ]`);
});
