import axios from "axios";

export const useFetchRepos = async () => {
  const runtimeConfig = useRuntimeConfig()

  const username = runtimeConfig.public.github

  const response = await axios.get(`https://api.github.com/users/${username}/repos`)

  return response.data
}
