/**
 * @file rush.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Defines routing for the rush tool
 */

/// <reference path="../typings/tsd.d.ts" />
import * as os from 'os';
import * as nomnom from 'nomnom';

import RushConfig from './RushConfig';
import executeLink from './ExecuteLink';
import executeBuild, { IExecuteBuildOptions } from './ExecuteBuild';

console.log(os.EOL + `Rush Mult-Package Build Tool`);

nomnom.command('link')
  .callback((options: any) => executeLink(RushConfig.loadFromDefaultLocation(), false))
  .help('Create node_modules symlinks for all projects');

nomnom.command('unlink')
  .callback((options: any) => executeLink(RushConfig.loadFromDefaultLocation(), true))
  .help('Remove node_modules symlinks for all projects');

nomnom.command('rebuild')
  .callback((options: IExecuteBuildOptions) => executeBuild(RushConfig.loadFromDefaultLocation(), options))
    .option('production', {
        flag: true,
        help: 'Run build in production mode.'
    })
    .option('vso', {
      flag: true,
      help: 'Display error messages in the VisualStudio Online format'
    })
    .option('quiet', {
        abbr: 'q',
        flag: true,
        help: 'Hide the output of the build task'
    })
  .help('Run "gulp nuke" and "gulp bundle" for all projects');

try {
  nomnom.parse();
} catch (error) {
  console.error(os.EOL + 'ERROR: ' + error.message);
}
