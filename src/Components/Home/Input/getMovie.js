import { APIKEY } from "../../../apiKey";
export const getMovie = async videoCode => {
  const code = videoCode.split("v=");
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${code}&key=${APIKEY}`,
    {
      method: "GET"
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data.items[0];
  }
};
