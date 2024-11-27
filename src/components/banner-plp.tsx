import Image from 'next/image'

export default function BannerPlp() {
	return (
		<>
			<div className='absolute w-full h-20 md:h-36  bg-gradient-to-b from-white/80 to-transparent -z-10' />
			<div className='absolute h-40 md:h-80 overflow-hidden top-0 left-0 -z-20 w-full '>
				<picture>
					<source media='(max-width: 768px)' srcSet='/images/search-banner-mobile.webp' />
					<source media='(min-width: 769px)' srcSet='/images/search-banner-desktop.webp' />
					<Image
						src='/mages/search-banner-mobile.webp'
						alt='Descriptive text for the image'
						width={500}
						height={300}
						layout='responsive'
					/>
				</picture>
			</div>
		</>
	)
}
