'use strict';

const fieEnv = require('fie-env');
const log = require('fie-log')('core-core');
/**
 * 初始化环境
 */
module.exports = function* () {
  const hasInitEnv = fieEnv.hasConfigFile();

  // 已经初始化过了,则退出
  // 如果是云构建，则不检测
  if (hasInitEnv || process.env.BUILD_ENV === 'cloud') {
    return;
  }

  log.warn('检测到您尚未初始化FIE的开发环境!');

  yield require('fie-commands/lib/switch')();

  log.success('也可以使用 $ fie switch 命令进行FIE开发环境的切换!');

  process.exit(10);
};
