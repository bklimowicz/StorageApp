import QuickActionsPanel from './components/quick-actions-panel/quick-actions-panel';
import ResultPanel from './components/result-panel/result-panel';

export default function Home() {
    //const items: Card[] = [];
    const items: any = [];
    return (
        <main className="flex w-full h-full items-center justify-center">
            {items.length > 0 ? <ResultPanel /> : <QuickActionsPanel />}
        </main>
    );
}
