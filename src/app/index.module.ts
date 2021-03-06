/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { camps } from "../app/components/camps/camps.directive"
import { FirebaseFactory } from "./components/camps/camp.service";

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module kendoPlaygroundTs {
  'use strict';

  angular.module('kendoPlaygroundTs', [ 'ngCookies', 'ngSanitize', 'ngMessages',
    'ngAria', 'ngResource', 'ui.router', 'kendo.directives', 'firebase'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .factory('FirebaseFactory', FirebaseFactory)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey)
    .directive('camps', camps);
}
