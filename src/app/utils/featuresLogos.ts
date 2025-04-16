import slackLogo from "@/assets/slack-logo.png"
import dockerLogo from "@/assets/docker-logo.png"
import figmaLogo from "@/assets/figma-logo.png"
import githubLogo from "@/assets/github-logo.png"
import vsCodeLogo from "@/assets/vs-code-logo.png"
import notionLogo from "@/assets/notion-logo.png"
import jiraLogo from "@/assets/jira-logo.png"
import gcpLogo from "@/assets/gcp-logo.png"

const features = [
    "Effortless integration",
    "Intelligente automation",
    "Robust security"
]

const logos = [
    {
        src: slackLogo,
        alt: "slack logo",
        rotate: 0
    },
    {
        src: dockerLogo,
        alt: "docker logo",
        rotate: 45
    },
    {
        src: figmaLogo,
        alt: "figma logo",
        rotate: 90
    },
    {
        src: githubLogo,
        alt: "github logo",
        rotate: 135
    },
    {
        src: vsCodeLogo,
        alt: "vscode logo",
        rotate: 180
    },
    {
        src: notionLogo,
        alt: "notion logo",
        rotate: 225
    },
    {
        src: jiraLogo,
        alt: "jira logo",
        rotate: 270
    },
    {
        src: gcpLogo,
        alt: "gcp logo",
        rotate: 315
    },
]

export { features, logos }