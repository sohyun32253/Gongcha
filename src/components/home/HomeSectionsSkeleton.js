import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './HomeSectionsSkeleton.css';

function SectionBlock({ children, className }) {
  return (
    <section className={`home-skeleton-section ${className || ''}`}>
      <div className="home-skeleton-inner">{children}</div>
    </section>
  );
}

function HomeSectionsSkeleton() {
  return (
    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#fafafa">
      <SectionBlock className="home-skeleton-new-menu">
        <Skeleton className="home-skeleton-title" height={40} width="100%" />
        <Skeleton className="home-skeleton-subtitle" height={20} width="100%" />
        <div className="home-skeleton-swiper">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="home-skeleton-slide" height={280} width="100%" borderRadius={8} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock className="home-skeleton-tea">
        <Skeleton className="home-skeleton-title" height={40} width="100%" />
        <div className="home-skeleton-tabs">
          <Skeleton className="home-skeleton-tab" height={44} width="100%" borderRadius={22} />
          <Skeleton className="home-skeleton-tab" height={44} width="100%" borderRadius={22} />
          <Skeleton className="home-skeleton-tab" height={44} width="100%" borderRadius={22} />
        </div>
        <div className="home-skeleton-tea-content">
          <Skeleton className="home-skeleton-tea-image" height={320} width="100%" borderRadius={12} />
          <div className="home-skeleton-tea-text">
            <Skeleton height={28} width="60%" style={{ margin: '0 auto 16px' }} />
            <Skeleton height={16} count={3} style={{ marginBottom: 8 }} />
            <Skeleton className="home-skeleton-tea-btn" height={44} width="100%" borderRadius={22} />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="home-skeleton-order">
        <Skeleton className="home-skeleton-title" height={40} width="100%" />
        <div className="home-skeleton-cards">
          <Skeleton className="home-skeleton-card" height={280} width="100%" borderRadius={12} />
          <Skeleton className="home-skeleton-card" height={280} width="100%" borderRadius={12} />
        </div>
      </SectionBlock>

      <SectionBlock className="home-skeleton-global home-skeleton-global-section">
        <div className="home-skeleton-global-row">
          <div className="home-skeleton-global-text">
            <Skeleton height={40} width="80%" style={{ marginBottom: 16 }} />
            <Skeleton height={20} width="90%" count={2} style={{ marginBottom: 8 }} />
            <div className="home-skeleton-counts">
              <Skeleton height={60} width={120} />
              <Skeleton height={60} width={120} />
            </div>
          </div>
          <Skeleton className="home-skeleton-global-map" height={320} width="100%" borderRadius={8} />
        </div>
      </SectionBlock>

      <SectionBlock className="home-skeleton-sns">
        <Skeleton className="home-skeleton-title" height={40} width="100%" />
        <div className="home-skeleton-sns-grid">
          <div className="home-skeleton-sns-row">
            <Skeleton className="home-skeleton-sns-item" height={240} width="100%" borderRadius={8} />
            <Skeleton className="home-skeleton-sns-item" height={240} width="100%" borderRadius={8} />
          </div>
          <div className="home-skeleton-sns-row">
            <Skeleton className="home-skeleton-sns-item" height={240} width="100%" borderRadius={8} />
            <Skeleton className="home-skeleton-sns-item" height={240} width="100%" borderRadius={8} />
          </div>
        </div>
      </SectionBlock>
    </SkeletonTheme>
  );
}

export default HomeSectionsSkeleton;
