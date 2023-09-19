import Application from 'finance-web/app';
import config from 'finance-web/config/environment';
import QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { forceModulesToBeLoaded, sendCoverage } from 'ember-cli-code-coverage/test-support';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

QUnit.done(async function() {
  forceModulesToBeLoaded();
  await sendCoverage();
})

start();
