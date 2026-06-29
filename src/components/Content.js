import React, { Suspense, lazy } from 'react';
import '../ContentStyle.css';
import QuickMenu from './home/QuickMenu';
import MainCarousel from './home/MainCarousel';
import HomeSectionsSkeleton from './home/HomeSectionsSkeleton';

const NewMenuSection = lazy(() => import('./home/NewMenuSection'));
const TeaRecipeSection = lazy(() => import('./home/TeaRecipeSection'));
const OrderStoreSection = lazy(() => import('./home/OrderStoreSection'));
const GlobalSection = lazy(() => import('./home/GlobalSection'));
const SnsSection = lazy(() => import('./home/SnsSection'));

function Content() {
  return (
    <main className='main'>
      <QuickMenu />
      <MainCarousel />

      <Suspense fallback={<HomeSectionsSkeleton />}>
        <NewMenuSection />
        <TeaRecipeSection />
        <OrderStoreSection />
        <GlobalSection />
        <SnsSection />
      </Suspense>
    </main>
  );
}

export default Content;
