import React, { useState, useEffect } from 'react';

import { UserTitle } from '../../components/Title';

/* import Header from '../../components/Header'; */

import {
	TwoContainerGrid,
	Grid1,
	Grid2,
	ContainerFlex,
	ContainerClient,
	ClientList,
} from '../../components/Box';

import {
	Orangebar,
	ButtonNewOrder,
	FindOrder,
	ClientIMG,
	ClientName,
	ClientProducts,
	ClientPrice,
} from './styles';

import api from '../../services/api';

const OrdersPlaced = () => {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		api.get('customers').then((response) => {
			setCustomers(response.data);
		});
	}, []);

	return (
		<TwoContainerGrid>
			<Grid1>{/* <Header /> */}</Grid1>

			<Grid2>
				<ContainerFlex>
					<UserTitle>Olá, Vanusa!</UserTitle>
					<Orangebar />
					<ButtonNewOrder>fazer novo pedido</ButtonNewOrder>
					<FindOrder type="text" placeholder="Procure o pedido aqui..." />

					<ContainerClient>
						{customers.map((item) => (
							<ClientList key={item.id}>
								<ClientIMG src={item.img} />
								<ClientName>{item.name}</ClientName>
								<ClientProducts>{item.products}</ClientProducts>
								<ClientPrice>{item.price}</ClientPrice>
							</ClientList>
						))}
					</ContainerClient>
				</ContainerFlex>
			</Grid2>
		</TwoContainerGrid>
	);
};

export default OrdersPlaced;
