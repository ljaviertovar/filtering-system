import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import { Badge } from './ui/badge'

export default function NavbarRigth() {
	return (
		<div className='flex items-center gap-4 justify-end pr-2 md:pr-0'>
			<Search size={20} className='text-muted-foreground' />
			<Heart size={20} className='text-muted-foreground' />
			<User size={20} className='text-muted-foreground' />
			<div className='relative'>
				<ShoppingCart size={20} className='text-muted-foreground' />
				<Badge className='absolute rounded-full p-0 w-[18px] h-[18px] text-center grid place-content-center -top-2 -right-3'>
					0
				</Badge>
			</div>
		</div>
	)
}
