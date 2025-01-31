import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { pretendard } from './fonts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className={`${pretendard.className} min-h-screen bg-white dark:bg-neutral-950`}>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
