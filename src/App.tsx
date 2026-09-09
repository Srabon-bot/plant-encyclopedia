import { Suspense, useState, useMemo } from 'react'
import './App.css'
import type { PlantType } from './types'
import Plants from './components/Plants/Plants'
import Categories from './components/Categories/Categories'
import { getCategories, getPlantByCategory } from './api/plants'

const categoriesPromise = getCategories();

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const plantsPromise = useMemo<Promise<PlantType[]> | null>(() => {
    return selectedCategoryId ? getPlantByCategory(selectedCategoryId) : null;
  }, [selectedCategoryId]);

  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <h1 className="font-display text-3xl text-text">Plant catalog</h1>
        <p className="text-muted mt-1">Pick a category to see what's in it.</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <Suspense fallback={<p className="text-muted">Loading categories...</p>}>
          <Categories
            categoriesPromise={categoriesPromise}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
          />
        </Suspense>

        {plantsPromise && (
          <Suspense fallback={<p className="text-muted mt-8">Loading plants...</p>}>
            <Plants plantsPromise={plantsPromise} />
          </Suspense>
        )}
      </main>
    </div>
  )
}

export default App