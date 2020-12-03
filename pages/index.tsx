// import Head from 'next/head'
import Collection from 'components/collection/collection';
import styles from './index.module.scss';
import ReleaseCard from 'components/release-card/release-card';
import { useEffect, useState } from 'react';


export default function Home() {
  const [ searchString, setSearchString ] = useState<string>("nirvana");
  const [ results, setResults ] = useState([]);
  const [ page , setPage ] = useState<number>(1);

  let typingTimer: any;

  const fetchItems = async (query: string) => {
    const response = await fetch(`http://localhost:3000/api/search?query=${query}&page=${page}&size=12`);
    const data = await response.json();
    setResults(data);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
    clearTimeout(typingTimer);
    const query: string = event.target.value.trimEnd().trimStart();
    if(query || query === "") {
      typingTimer = setTimeout(() => fetchItems(query), 1000);
    }
  }

  useEffect(() => {
    fetchItems("");
  }, [])

  return (
    <div className={styles.layout}>
      <Collection />
      <main className={styles.mainContainer}>
        <div className={styles.gridView}>

          <input placeholder="Search by artist , album or both..." onChange={handleSearch} />
          {results.map(item => 
            <ReleaseCard key={item.id} release={item}/>
          )}
        </div>
      </main>
    </div>
  )
}
