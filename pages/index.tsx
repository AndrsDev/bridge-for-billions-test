// import Head from 'next/head'
import Collection from 'components/collection/collection';
import styles from './index.module.scss';
import ReleaseCard from 'components/release-card/release-card';
import { useEffect, useRef, useState } from 'react';
import ReleaseDetailsModal from 'components/release-details-modal/release-details-modal';


export default function Home() {
  const [ selectedRelease, setSelectedRelease ] = useState(null);
  const [ searchString, setSearchString ] = useState<string>("");
  const [ results, setResults ] = useState([]);
  const [ page , setPage ] = useState<number>(1);
  const [ element, setElement ] = useState(null);
  const observer = useRef<IntersectionObserver>();
  let typingTimer: NodeJS.Timeout;

  const closeModal = () => {
    setSelectedRelease(null);
  }

  const fetchItems = async (query: string) => {
    const response = await fetch(`http://localhost:3000/api/search?query=${query}&page=${page}&size=12`);
    const data = await response.json();
    setResults(results.concat(data.results));
    setPage(page + 1);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
    clearTimeout(typingTimer);
    const query: string = event.target.value.trimEnd().trimStart();
    if(query || query === "") {
      typingTimer = setTimeout(() => {
        setSearchString(query);
        setPage(1);
        setResults([]);
      }, 1000);
    }
  }

  /* 
    References needed to allow the intersection observer work
    as expected. 
  */
  const fetchItemsRef = useRef(fetchItems)
  const searchStringRef = useRef(searchString);

  useEffect(() => {
    searchStringRef.current = searchString
  }, [searchString])

  useEffect(() => {
    fetchItemsRef.current = fetchItems
  }, [fetchItems])

  /*
    Start observing the element when the element changes. 
    Then dispose it. 
  */
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if(currentElement){
      currentObserver.observe(currentElement);
    }

    return () => {
      if(currentElement){
        currentObserver.unobserve(currentElement);
      }
    }

  }, [element])
  
  /*
    Initialize the intersection observer since the 
    initialization needs to be on the client browser.
  */
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if(first.isIntersecting){
          fetchItemsRef.current(searchStringRef.current)
        }
      }, 
      {
        threshold: 0,
      }
    )
  }, [])

  return (
    <>
      <div className={styles.layout}>
        <Collection />
        <main className={styles.mainContainer}>
          <div className={styles.gridView}>
            <input placeholder="Search by artist , album or both..." onChange={handleSearch} />
            {results.map((item, index) => 
              <ReleaseCard key={index} release={item} onClick={() => setSelectedRelease(item)}/>
            )}
          </div>
          <div id="loadMoreItem" ref={setElement}></div>
        </main>
      </div>
      { selectedRelease && 
        <ReleaseDetailsModal release={selectedRelease} onClose={closeModal}/>
      }
    </>
  )
}
