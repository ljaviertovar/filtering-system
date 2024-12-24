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
			throw new Error(`${response.statusText}`)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}
