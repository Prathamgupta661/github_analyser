import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  onSearch: (username: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={() => onSearch(username)}>Search</Button>
    </div>
  );
};
