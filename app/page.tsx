import Header from './components/header/header';
import QuickActionsPanel from './components/quick-actions-panel/quick-actions-panel';
import ResultPanel from './components/result-panel/result-panel';
import SearchBar from './components/search-bar/search-bar';

export default function Home() {
    //const items: Card[] = [];
    const items: any = [];
    return (
        <main className="flex w-full h-full items-center justify-center">
            {items.length > 0 ? <ResultPanel /> : <QuickActionsPanel />}
        </main>
    );
}
