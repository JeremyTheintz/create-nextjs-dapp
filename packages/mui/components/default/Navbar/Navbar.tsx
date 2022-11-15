import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { Box } from '@mui/system';
import { FaStar } from 'react-icons/fa';
import { ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp';

const Navbar = () => {
	return (
		<Box
			component='nav'
			paddingY={{ xs: 2, md: 4 }}
			paddingX={{ xs: 2, md: 4 }}
			width='100%'
			sx={{ display: 'flex', justifyContent: 'space-between', position: 'fixed', left: '0', right: '0' }}
		>
			<Text type={ETextType.h1} size={ESize.s}>
				Create Nextjs Dapp
			</Text>

			<Box>
				<Button
					href={repoUrl}
					icon={<FaStar size={28} />}
					iconColor={'#e3b341'}
					gradientContainerProps={{ sx: { display: { xs: 'none', md: 'flex' } } }}
				>
					Star on Github
				</Button>

				<WalletButton />
			</Box>
		</Box>
	);
};

export { Navbar };
