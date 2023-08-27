import { Navigate } from "react-router-dom";

//Temporary while we setup the authentication.
export enum LoginType {
  Default = 0,
  Jobseeker,
  Employer,
}

export interface urlPages {
  title: string;
  url: string;
}
const defaultPages = [
  { title: "Home", url: "/jobba" },
  { title: "Find Jobs", url: "/findjobs" },
];

export function getAuthenticatedURLs(params: any): urlPages[] {
  switch (params.LoginType) {
    case LoginType[LoginType.Jobseeker]:
    case LoginType[LoginType.Employer]:
      return defaultPages.map((o) => ({
        title: o.title,
        url: `..\\${params.LoginType.toLowerCase().concat(o.url)}`,
      }));
    default:
      return defaultPages;
  }
}
