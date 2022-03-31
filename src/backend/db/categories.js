import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "paintings",
		img: "https://aipan-store.netlify.app/assets/paintings/painting1.jpg",
	},
	{
		_id: uuid(),
		categoryName: "bags",
		img: "https://aipan-store.netlify.app/assets/bags/bag1.jpg",
	},
	{
		_id: uuid(),
		categoryName: "diary",
		img: "https://aipan-store.netlify.app/assets/diary/diary2.jpg",
	},
	{
		_id: uuid(),
		categoryName: "coaster",
		img: "https://aipan-store.netlify.app/assets/coaster/coaster1.jpg",
	},
];
