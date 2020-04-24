import styled from 'styled-components';

export const ContainerHeader = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #ff8822;
`;
export const DivLogo = styled.div`
	padding: 56px 0 80px;
`;

export const UlContainer = styled.ul`
	flex-grow: 1;
	align-self: flex-start;
	width: 100%;
`;

export const ItemList = styled.a`
	font-weight: 600;
	display: block;
	font-size: 14px;
	line-height: 22px;
	text-transform: uppercase;
	padding: 0 0 0 40px;
	line-height: 56px;
	color: rgba(255, 255, 255, 0.54);
`;

export const FooterHeader = styled.footer`
	padding: 40px;
`;
