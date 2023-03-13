import React from 'react';
import { AllPosts } from '../features/allPosts/AllPosts.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import styles from '../styles/App.css'

export default function App() {
  return (
    <main style={styles.AllPosts}>
      <header>
        <h1>Mini Reddit</h1>
      </header>
      <section>
        <SearchTerm/>
      </section>
      <section>
        <AllPosts/>
      </section>
    </main>
  );
}