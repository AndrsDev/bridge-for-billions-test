import { Release } from "models/release.model";
import { createContext, useState, useEffect } from "react";

export const CollectionContext = createContext(null);
export default function CollectionContextProvider (props) {

	const [ items, setItems ] = useState<Array<Release>>([]);

	const toggleItem = (item) => {
		if(items.includes(item)){
			const i = items.indexOf(item);
			items.splice(i, 1);
			setItems([...items]);
		} else {
			setItems(items.concat(item));
		}
	}

	return (
		<CollectionContext.Provider value={{ items, toggleItem }}>
			{props.children}
		</CollectionContext.Provider>
	);
};
