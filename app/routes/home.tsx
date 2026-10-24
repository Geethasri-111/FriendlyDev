import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import Featuredprojects from "~/components/Featuredprojects";
import type { project } from '~/types'

export async function loader({ request }: Route.LoaderArgs) {
  
    const res= await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await res.json();
    return {projects:data}
}

const Home = ({ loaderData,}: Route.ComponentProps) => {
  const {projects} = loaderData;

  return <Featuredprojects projects={projects} count={2}/>;
}

export default Home;
