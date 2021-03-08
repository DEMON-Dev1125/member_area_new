/*************This is main route define part***************** */
import Content from "./views/Contents/Contentroute.js";
import Group from "./views/Groups/Grouproute.js";
import Certificate from "./views/Certificate/Certificateroute.js";
import Invitation from "./views/Invitation/Inviteroute.js";
import Member from "./views/Member/Memberroute.js";
// import Comunity from "./views/Comunity/comunity-route.js";

var routes = [
  {
    path: "/content",
    name: "Conteúdos",
    icon: "fas fa-list-alt",
    component: Content,
    layout: "/main",
  },
  {
    path: "/group",
    name: "Turmas",
    icon: "fa fa-users",
    component: Group,
    layout: "/main",
  },
  {
    path: "/certificate",
    name: "Certificado",
    icon: "fa fa-sun",
    component: Certificate,
    layout: "/main",
  },
  {
    path: "/invite",
    name: "Convites",
    icon: "fa fa-paper-plane",
    component: Invitation,
    layout: "/main",
  },
  {
    path: "/member",
    name: "Membros",
    icon: "fa fa-users",
    component: Member,
    layout: "/main",
  },
  // {
  //   path: "/comunity",
  //   name: "Comunidade",
  //   icon: "fa fa-users",
  //   component: Comunity,
  //   layout: "/main",
  // },
];

export default routes;
