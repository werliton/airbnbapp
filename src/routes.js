import { createStackNavigator } from "react-navigation";

import SignIn from '../src/pages/signIn'
import SignUp from '../src/pages/signUp'
import Main from '../src/pages/main'

const Routes = createStackNavigator({
    SignIn,
    SignUp,
    Main
})

export default Routes