export default async function useFetch(url: string, options?: RequestInit) {
  const response = await fetch(`https://api.neople.co.kr/df/${url}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Connection: 'keep-alive'
    },
    ...options
  })

  return response.json()
}
