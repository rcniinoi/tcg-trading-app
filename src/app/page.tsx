import CardGrid from '../components/CardGrid';

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">FaB Card Collection</h1>
      </header>
      <main>
        <CardGrid />
      </main>
    </div>
  );
}
