import Content from "./views/Contents/Contentroute";
import Group from "./views/Groups/Grouproute";
import Certificate from "./views/Certificate/Certificateroute";
import Invitation from "./views/Invitation/Inviteroute";
import Member from "./views/Member/Memberroute";
import Community from "./views/Community/Communityroute";
import Setting from "./views/Setting";
import Appearance from "./views/Appearance";

var routes = [
  {
    path: "/content",
    name: "Conteúdos",
    icon: "fas fa-list-alt",
    component: Content,
    layout: "/main",
    permission: "public",
  },
  {
    path: "/group",
    name: "Turmas",
    icon: "fa fa-users",
    component: Group,
    layout: "/main",
    permission: "public",
  },
  {
    path: "/certificate",
    name: "Certificado",
    icon: "fa fa-sun",
    component: Certificate,
    layout: "/main",
    permission: "public",
  },
  {
    path: "/invite",
    name: "Convites",
    icon: "fa fa-paper-plane",
    component: Invitation,
    layout: "/main",
    permission: "public",
  },
  {
    path: "/member",
    name: "Membros",
    icon: "fa fa-users",
    component: Member,
    layout: "/main",
    permission: "public",
  },
  {
    path: "/community",
    name: "Comunidade",
    icon: "fa fa-comments",
    component: Community,
    layout: "/main",
    permission: "public",
  },

  {
    path: "/setting",
    name: "Configurações",
    icon: "fa fa-cog",
    component: Setting,
    layout: "/main",
    permission: "private",
  },
  {
    path: "/appearance",
    name: "Aparência",
    icon: "fa fa-sliders-h",
    component: Appearance,
    layout: "/main",
    permission: "private",
  },
  {
    path: "/",
    name: "Sair",
    icon: "fa fa-sign-out-alt",
    layout: "/login",
    permission: "private",
  },
];

export default routes;
