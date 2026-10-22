import { type RouteConfig, index, route ,layout} from "@react-router/dev/routes";

export default [
    layout('routes/layouts/homeLayout.tsx',[index("routes/home.tsx")]),
    layout('routes/layouts/main.tsx',[
    route("about",'routes/about.tsx'),
    route("contact",'routes/contact.tsx'),
    route("projects",'routes/Projects.tsx'),
    route("blog",'routes/Blog.tsx'),
    ]),

] satisfies RouteConfig;
