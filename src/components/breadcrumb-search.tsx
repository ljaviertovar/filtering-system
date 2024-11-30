import { Slash } from 'lucide-react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function BreadcrumbSearch() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/categories' className='text-xs'>
						Shop All
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<Slash />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage className='text-xs'>Categories</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
