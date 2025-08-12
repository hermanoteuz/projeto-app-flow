import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListepisodes = async () => {
  const data = await repositoryPodcast();
  return data;
};
