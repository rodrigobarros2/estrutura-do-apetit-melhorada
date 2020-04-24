import styled from 'styled-components';

export const Orangebar = styled.div`
	width: 224px;
	height: 2px;
	background: #ff8822;
`;

export const ButtonNewOrder = styled.button`
	width: 100%;
	height: 56px;
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	font-family: Open Sans;
	font-weight: 600;
	font-size: 14px;
	text-transform: uppercase;
	color: rgba(0, 0, 0, 0.56);
`;

export const FindOrder = styled.input`
	width: 100%;
	height: 24px;
	font-size: 16px;
	margin: 0 0 18px 0;
	padding: 10px;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.34);
	background: transparent;
	font-size: 16px;
`;

export const ClientIMG = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

export const ClientName = styled.p`
	font-weight: 600;
	font-size: 16px;
	display: inline-block;
	color: rgba(0, 0, 0, 0.87);
`;

export const ClientProducts = styled.p`
	font-size: 12px;
	line-height: 18px;
	color: rgba(0, 0, 0, 0.54);
	display: inline-block;
`;

export const ClientPrice = styled.h6`
	height: 24px;
	font-weight: 600;
	font-size: 16px;
	margin-left: auto;
	color: rgba(0, 0, 0, 0.87);
`;

export const SaleInformation = styled.h6`
	width: 259px;
	height: 24px;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	padding:0 0 40px 0;
`;

export const ClientDetails = styled.div`
	display: flex;
	flex-direction: column;
`;
