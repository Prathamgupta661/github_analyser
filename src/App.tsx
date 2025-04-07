import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { RepoList } from "./components/RepoList";
import { CommitsChart } from "./components/CommitsChart";
import { SkeletonRepoList } from "./components/SkeletonRepoList";
import { SkeletonChart } from "./components/SkeletonChart";
import { format, addDays } from "date-fns";
import { Footer } from "./components/Footer";

const ITEMS_PER_PAGE = 5;

function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    setChartData([]);
    setRepos([]);

    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error(res.status.toString());
      const repos = await res.json();

      if (repos.length === 0) {
        setError("No repositories found.");
        setIsLoading(false);
        return;
      }

      setRepos(repos);
      setCurrentPage(1);

      const commitMap: { [key: string]: number } = {};

      for (const repo of repos.slice(0, 5)) {
        const statsRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/stats/commit_activity`
        );
        if (!statsRes.ok) continue;
        const stats = await statsRes.json();

        if (Array.isArray(stats)) {
          stats.forEach((week: any) => {
            week.days.forEach((count: number, i: number) => {
              const date = format(addDays(new Date(week.week * 1000), i), "yyyy-MM-dd");
              commitMap[date] = (commitMap[date] || 0) + count;
            });
          });
        }
      }

      const formatted = Object.entries(commitMap).map(([date, commits]) => ({
        date,
        commits,
      }));

      setChartData(formatted);
    } catch (err: any) {
      if (err.message === "404") {
        setError("User not found.");
      } else if (err.message === "403") {
        setError("API rate limit exceeded. Try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRepos = repos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Analyzer</h1>
      <SearchBar onSearch={handleSearch} />

      {isLoading && (
        <>
          <SkeletonRepoList />
          <SkeletonChart />
        </>
      )}

      {!isLoading && error && (
        <div className="text-red-600 mt-4 font-medium">{error}</div>
      )}

      {!isLoading && !error && (
        <>
          <RepoList repos={paginatedRepos} />

          {chartData.length > 0 && (
            <div className="mt-6 p-4 border rounded bg-white shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Commits Chart (Last 30 Days)</h2>
              <CommitsChart data={chartData} />
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex gap-2 mt-6 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
      <Footer/>
    </div>
  );
}

export default App;
