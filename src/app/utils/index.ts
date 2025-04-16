import { ButtonProps } from "../components/Button";
import { faYoutube, faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export const navItems = [
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
];

export const loginItems = [
    {
        buttonVariant: "tertiary",
        name: "Login",
        href: "#login",
    },
    {
        buttonVariant: "primary",
        name: "Sign Up",
        href: "#sign-up",
    },
] satisfies {
    name: string
    href: string
    buttonVariant: ButtonProps['variant']
}[];

export const socialLinks = [
    {
      name: "Youtube",
      icon: faYoutube,
      href: "#",
    },
    {
      name: "X",
      icon: faXTwitter,
      href: "#",
    },
    {
      name: "Discord",
      icon: faDiscord,
      href: "#",
    },
];