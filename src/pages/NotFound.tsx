import { Link } from "react-router-dom";
import EditorialShell from "@/components/EditorialShell";
import SiteMeta from "@/components/SiteMeta";

export default function NotFound() {
  return <EditorialShell><SiteMeta title="Page not found | EntropyPC" description="The requested EntropyPC page could not be found." /><main className="site-container flex min-h-[70vh] flex-col items-start justify-center"><p className="eyebrow">Signal lost // 404</p><h1 className="mt-5 text-5xl font-bold">This page is outside the map.</h1><p className="mt-5 max-w-xl text-foreground/65">The URL does not match a published field note. Return to the homepage or browse the guides.</p><div className="mt-8 flex gap-5"><Link to="/" className="cta-primary clip-chamfer px-6 py-3 text-xs">Return home</Link><Link to="/guides" className="section-link self-center">Browse guides →</Link></div></main></EditorialShell>;
}
