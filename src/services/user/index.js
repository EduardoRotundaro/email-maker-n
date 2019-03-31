import axios from 'axios'

import config from '../configObject'

export const Login = data => ( axios( config('post', 'auth', data) ) )
