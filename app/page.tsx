import CoinOverview from '@/Components/home/CoinOverview';
import { CoinOverviewFallback, TrendingCoinsFallback } from '@/Components/home/fallback';
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
        <p>Catagories</p>
      </section>
    </main>
  )
}

export default page