export async function fetchData(url: string, options: Record<string, any> = {}) {
	try {
		const defaultHeaders = {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/plain, */*',
		}

		const config = {
			method: 'GET',
			headers: { ...defaultHeaders, ...options.headers },
			...options,
		}

		const response = await fetch(url, config)

		if (!response.ok) {
			console.log(`Error: ${response.status} ${response.statusText}`)
			throw new Error(`Error: ${response.status} ${response.statusText}`)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}
