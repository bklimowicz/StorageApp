import Header from "./components/header/header";
import QuickActionsPanel from "./components/quick-actions-panel/quick-actions-panel";
import ResultPanel from "./components/result-panel/result-panel";
import SearchBar from "./components/search-bar/search-bar";

export default function Home() {
  //const items: Card[] = [];
  const items: any = [];
  return (
    <main>
      <Header />
      <SearchBar />
      {items.length > 0 ? <ResultPanel /> : <QuickActionsPanel />}      
    </main>
  );
}
