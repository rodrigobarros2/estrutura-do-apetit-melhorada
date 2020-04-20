import styled from 'styled-components';

export const BtnRound = styled.button`
	width: 208px;
	height: 48px;
	background: #ff8822;
	border-radius: 100px;
	border: none;
	font-weight: 600;
	font-size: 14px;
	text-transform: uppercase;
	color: #ffffff;
`;

export const BtnSquare = styled(BtnRound)`
	width: 203px;
	height: 48px;
	border-radius: 5px;
`;
