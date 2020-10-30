import 'reflect-metadata'

import { database } from 'src/services/DatabaseService'

require('dotenv').config()
database.init()
