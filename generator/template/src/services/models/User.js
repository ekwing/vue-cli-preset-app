import Base from './Base'
import {BaseURL} from '@/utils/decorators'

@BaseURL('/user')
class User extends Base {}

export default new User()
