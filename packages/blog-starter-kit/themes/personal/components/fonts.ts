import localFont from 'next/font/local';

export const pretendard = localFont({
	src: [
		{
			path: '../public/fonts/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Pretendard-Bold.woff2',
			weight: '700',
			style: 'bold',
		},
		{
			path: '../public/fonts/Pretendard-Medium.woff2',
			weight: '500',
			style: 'medium',
		},
		{
			path: '../public/fonts/Pretendard-SemiBold.woff2',
			weight: '600',
			style: 'semibold',
		},
		{
			path: '../public/fonts/Pretendard-ExtraBold.woff2',
			weight: '800',
			style: 'extrabold',
		},
		{
			path: '../public/fonts/Pretendard-Thin.woff2',
			weight: '100',
			style: 'thin',
		},
		{
			path: '../public/fonts/Pretendard-ExtraLight.woff2',
			weight: '200',
			style: 'extralight',
		},
		{
			path: '../public/fonts/Pretendard-Light.woff2',
			weight: '300',
			style: 'light',
		},
		{
			path: '../public/fonts/Pretendard-Black.woff2',
			weight: '900',
			style: 'black',
		},
	],
	variable: '--font-pretendard',
	display: 'swap',
});
