import React, { FC } from 'react';
import { ITechnologies } from './Technologies.type';
import Image from 'next/future/image';
import { StyledLink, StyledLogoContainer, StyledTechnologies } from './Technologies.styles';
import useResponsive from '@hooks/useResponsive';
import { EFlex } from '@components/layout/Flex/Flex.enum';

const LOGOS = [
	{
		label: 'NextJs',
		url: 'https://nextjs.org/',
		src: '/assets/logo-next.svg'
	},
	{
		label: 'Typescript',
		url: 'https://www.typescriptlang.org/',
		src: '/assets/logo-typescript.svg'
	},
	{
		label: 'React',
		url: 'https://reactjs.org/',
		src: '/assets/logo-react.svg'
	},
	{
		label: 'Ethers',
		url: 'https://docs.ethers.io/v5/',
		src: '/assets/logo-ethers.svg'
	},
	{
		label: 'WalletConnect',
		url: 'https://walletconnect.org/',
		src: '/assets/logo-wallet-connect.svg'
	},
	{
		label: 'MetaMask',
		url: 'https://metamask.io/',
		src: '/assets/logo-metamask.svg'
	}
];

const Technologies: FC<ITechnologies> = () => {
	const { isBiggerThanMd } = useResponsive();

	const cssLogo = !isBiggerThanMd ? { width: 'auto', height: '30px' } : { width: 'auto', height: '45px' };

	return (
		<StyledTechnologies horizontal={EFlex.center} vertical={EFlex.center} wrapItems gap={30} mdGap={40} lgGap={50}>
			{LOGOS.map((logo) => (
				<StyledLogoContainer key={logo.label}>
					<Image src={logo.src} alt={logo.label} width={60} height={60} style={cssLogo} />

					<StyledLink href={logo.url} aria-label={`link to ${logo.label}`} target='_blank' rel='noopener noreferrer' />
				</StyledLogoContainer>
			))}
		</StyledTechnologies>
	);
};

export { Technologies };