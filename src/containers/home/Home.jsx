import React from 'react';
import HomeBanner from './HomeBanner';
import HomeStart from './HomeStart';
import HomeSupport from './HomeSupport';
import HomeSupportBy from './HomeSupportBy';
import HomeClient from './HomeClient';
import HomeMulti from './HomeMulti';
import HomeAnalytic from './HomeAnalytic';
import HomeOmni from './HomeOmni';
import HomeCards from './HomeCards';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCards />
      <HomeOmni />
      <HomeMulti />
      <HomeAnalytic />
      <HomeClient />
      <HomeSupportBy />
      <HomeSupport />
      <HomeStart />
    </div>
  );
};

export default Home;
