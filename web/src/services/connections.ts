// api class which takes from web.env file the API_URL and assigns it to this.baseUrl
// import axios
import axios from 'axios';

export type PostContent = {
  user?: string;
  content: string;
  code?: string;
  likes?: number;
  dislikes?: number;
  comments?: number;
  langauge?: string;
  hasCode?: boolean;
};
export class WeCodeApi {
  baseUrl?: string;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }
  // post request for sending content
  public async sendPost(
    postContent?: PostContent,
    room = 'Main'
  ): Promise<void> {
    console.log('clicked', this.baseUrl);
    const response = await axios.post(
      `${this.baseUrl}/post_content`,
      postContent
    );
    console.log(response.data);
  }

  public async getPosts(room = 'Main'): Promise<PostContent[]> {
    const response = await axios.get(`${this.baseUrl}/post_content/${room}}`);
    console.log(response.data);
    return response.data;
  }
}

const WeCode = new WeCodeApi();
export default WeCode;
