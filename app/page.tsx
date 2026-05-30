import PortfolioClient from "./components/PortfolioClient"

export async function getData() {
  const projects = [
    {
      id: "serenmind-public",
      name: "SerenMind-Public",
      description:
        "Your serene digital space for mindful productivity, self-awareness, and mental well-being. Built with Next.js 15, Tailwind CSS, Framer Motion, ShadCN/UI.",
      githubUrl: "https://github.com/Mrinmoy-programmer07/SerenMInd-Public",
      liveUrl: "https://serenmind-public.onrender.com",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "ShadCN/UI",
        "TypeScript",
      ],
      image: "/serenmind-preview.png", // Updated image path
      stars: 0, // Placeholder, can be updated manually if needed
      forks: 0, // Placeholder, can be updated manually if needed
      type: "featured", // Or 'personal', 'open-source', etc.
    },
    {
      id: "shopzone",
      name: "ShopZone",
      description:
        "An e-commerce application built with modern web technologies.", // Placeholder description, can be refined.
      githubUrl: "https://github.com/Mrinmoy-programmer07/ShopZone",
      liveUrl: "https://lovable.dev/projects/a6aab953-4e89-4755-81ad-aa2e98b12afe",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      image: "/shopzone-preview.png", // Updated image path
      stars: 0,
      forks: 0,
      type: "e-commerce",
    },
    {
      id: "deepguard",
      name: "Deepguard",
      description:
        "A security-focused project leveraging advanced threat detection.", // Placeholder description, can be refined
      githubUrl: "https://github.com/Mrinmoy-programmer07/Deepguard",
      liveUrl: "#", // No live demo URL provided, using a placeholder
      technologies: ["Python", "Machine Learning", "Cybersecurity"], // Placeholder technologies
      image: "/deepguard-preview.png", // Updated image path
      stars: 0,
      forks: 0,
      type: "security",
    },
    {
      id: "loland",
      name: "LOLand",
      description:
        "A decentralized application for meme creation, minting NFTs, and social interactions, featuring Web3 authentication and blockchain integration.",
      githubUrl: "https://github.com/Mrinmoy-programmer07/LOLand",
      liveUrl: "#", // Live demo URL not found, using a placeholder
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "Ethers.js",
        "Wagmi",
      ],
      image: "/loland-preview.png", // Updated image path
      stars: 0,
      forks: 3,
      type: "blockchain",
    },
    {
      id: "doc-press",
      name: "Doc-press",
      description:
        "A platform for generating and managing documentation, likely with Web3 integration as indicated by the live URL.", // Description based on context
      githubUrl: "https://github.com/Mrinmoy-programmer07/Doc-press",
      liveUrl: "https://v0-web3-certificate-frontend.vercel.app/", // Live demo URL from GitHub README
      technologies: ["TypeScript", "CSS", "JavaScript"], // Technologies from GitHub repo languages
      image: "/docpress-preview.png", // Updated image path
      stars: 0,
      forks: 2,
      type: "documentation",
    },
    {
      id: "afterlife",
      name: "AfterLife",
      description:
        "A decentralized 'Dead Man's Switch' protocol for secure crypto inheritance. Ensures your digital assets are distributed to beneficiaries if you become inactive, with trustless execution, customizable inactivity thresholds, and multi-chain support on Arbitrum and Mantle.",
      githubUrl: "https://github.com/Mrinmoy-programmer07/AfterLIfe",
      liveUrl: "https://after-life-delta.vercel.app/",
      technologies: [
        "Solidity",
        "Next.js",
        "TypeScript",
        "Ethers.js",
        "Arbitrum",
        "Mantle",
        "Web3",
      ],
      image: "/afterlife-preview.png",
      stars: 0,
      forks: 0,
      type: "blockchain",
    },
    // Add more hardcoded projects here if needed
  ]

  // For now, experiences will be hardcoded in the Experience component
  const experiences: any[] = []

  return { projects, experiences }
}

export default async function Portfolio() {
  const { projects, experiences } = await getData()
  return <PortfolioClient projects={projects} experiences={experiences} />
}
