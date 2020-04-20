import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import Store from './store';

import Login from './pages/Login';
import OrdersPlaced from './pages/OrdersPlaced';
import OrderDetails from './pages/OrderDetails';
import SelectCustomers from './pages/SelectCustomers';
import OrderInformation from './pages/OrderInformation';
import NewOrder from './pages/NewOrder';
import OrderBreakdown from './pages/OrderBreakdown';
import OrderFeedback from './pages/OrderFeedback';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={OrdersPlaced} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/detalhesdopedido" component={OrderDetails} />
				<Route exact path="/novopedido" component={NewOrder} />
				<Route exact path="/detalhamentodopedido" component={OrderBreakdown} />
				<Route exact path="/cliente" component={SelectCustomers} />
				<Route exact path="/informacoesdopedido" component={OrderInformation} />
				<Route exact path="/feedback" component={OrderFeedback} />
			</Switch>
		</BrowserRouter>
	);
}
