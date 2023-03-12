import React from 'react';
import { AllPosts } from '../features/allPosts/AllPosts.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export default function App() {
  return (
    <main>
      <section>
        <SearchTerm/>
      </section>
      <section>
        <AllPosts/>
      </section>
    </main>
  );
}