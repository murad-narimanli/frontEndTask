import React from 'react';
import Home from "../../Pages/Home/Home";
import { Switch, Route} from "react-router-dom";

const  Routes = (props)  => {
    return (
       <div className="content">
           <Switch >
               <Route path="/" component={Home} exact />
               <Route path="/" >
                   not found
               </Route>
           </Switch>
       </div>
    );
}


export default Routes;
