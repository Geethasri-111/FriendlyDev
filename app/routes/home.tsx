import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import Featuredprojects from "~/components/Featuredprojects";
import type { PostMeta, project } from '~/types'
import AboutPreview from "~/components/AboutPreview";
import LatestPost from "~/components/LatestPost";

export async function loader({ request }: Route.LoaderArgs):Promise<{projects:project[];blogs:PostMeta[]}> {
      const url = new URL(request.url);

      const [projectReq,blogReq]  = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}`),
        fetch(new URL('/posts-meta.json',url))
      ])
      if(!projectReq.ok || !blogReq.ok) throw new Error('Request Failed');
      const [projects , blogs] =  await Promise.all([projectReq.json(),blogReq.json()]);
    return {projects,blogs}
}

const Home = ({ loaderData,}: Route.ComponentProps) => {
  const {projects,blogs} = loaderData;

  return(<>
   <Featuredprojects projects={projects} count={2}/>
   <AboutPreview/>
   <LatestPost blogs={blogs}/>
   </>
  )
}

export default Home;
