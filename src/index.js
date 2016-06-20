import angular from 'angular'
import uiRouter from 'angular-ui-router'

import config from './config'
import home from './home/index.js'
import about from './about/index.js'

angular.module('app', [uiRouter, home, about])
.config(config);
