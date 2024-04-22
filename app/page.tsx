export default function Home() {
  const items: Card[] = [];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SearchBar />
      {items ? <ResultPanel /> : <QuickActionsPanel />}      
    </main>
  );
}
