import React from 'react';
import {
	ContainerHeader,
	FooterHeader,
	UlContainer,
	DivLogo,
	ItemList,
} from './styles';
import LogoAppetit from '../../assets/Icons/LogoAppetit';

function Header() {
	return (
		<ContainerHeader>
			<DivLogo>
				<LogoAppetit color="#FFF" hover="#f00" />
			</DivLogo>
			<UlContainer>
				<ItemList>pedidos</ItemList>
				<ItemList>em aberto</ItemList>
				<ItemList>encerrados</ItemList>
				<ItemList>pedidos</ItemList>
			</UlContainer>

			<FooterHeader>Infoway Gestão em Saúde ©, 2019.</FooterHeader>
		</ContainerHeader>
	);
}

export default Header;
