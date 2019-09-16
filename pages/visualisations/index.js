import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <p>Visualisations Page</p>
    <Link href="/visualisations/test-visualisation">
      <a>Test Visualisation</a>
    </Link>
  </div>
);

export default Index;
