'use strict';

import {Router} from 'express';
import * as controller from './geva.controller';
import auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.isAuthenticated(), controller.index);

module.exports = router;
