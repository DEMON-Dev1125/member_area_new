/*************This is main route define part***************** */
import Content from "./views/Contents/content-route.js";
import Group from "./views/Groups/group-route.js";
// import Certificate from "./views/Certificate/certificate-route.js";
// import Invitation from "./views/Invitation/invite-route.js";
// import Member from "./views/Member/memeber-route.js";
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
  // {
  //   path: "/certificate",
  //   name: "Certificado",
  //   icon: "fa fa-users",
  //   component: Certificate,
  //   layout: "/main",
  // },
  // {
  //   path: "/invitation",
  //   name: "InvitationCards",
  //   icon: "fa fa-users",
  //   component: Invitation,
  //   layout: "/main",
  // },
  // {
  //   path: "/member",
  //   name: "Membros",
  //   icon: "fa fa-users",
  //   component: Member,
  //   layout: "/main",
  // },
  // {
  //   path: "/comunity",
  //   name: "Comunidade",
  //   icon: "fa fa-users",
  //   component: Comunity,
  //   layout: "/main",
  // },
];

export default routes;
