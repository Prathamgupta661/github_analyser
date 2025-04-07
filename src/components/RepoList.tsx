import { Card } from "@/components/ui/card";

type Props = {
  repos: any[];
};

export const RepoList = ({ repos }: Props) => (
  <div className="grid md:grid-cols-2 gap-4">
    {repos.map((repo) => (
      <Card key={repo.id} className="p-4">
        <h3 className="font-semibold text-lg">{repo.name}</h3>
        <p className="text-sm">{repo.description || "No description"}</p>
        <p className="text-xs text-muted-foreground mt-2">
          ⭐ {repo.stargazers_count} | {repo.language}
        </p>
      </Card>
    ))}
  </div>
);
