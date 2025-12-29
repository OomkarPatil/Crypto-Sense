import Categories from '@/Components/home/Categories';
import CoinOverview from '@/Components/home/CoinOverview';
import { CoinOverviewFallback, TrendingCoinsFallback, CategoriesFallback } from '@/Components/home/fallback';
import TrendingCoins from '@/Components/home/TrendingCoins';
import { Suspense } from 'react';


const page = async () => {

  return (
    <main className='main-container'>
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className='w-full mt-7 space-y-4'>
        <Suspense fallback={<CategoriesFallback />}>
          <Categories />
        </Suspense>
      </section>
    </main>
  )
}

export default page