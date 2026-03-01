import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 flex items-center justify-center">
      <HandWrittenTitle 
        title="Welcome to Pu-mess"
        subtitle="A beautiful animated landing page"
      />
    </div>
  );
}
