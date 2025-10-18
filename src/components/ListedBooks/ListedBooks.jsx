import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = books.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [books])

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishListInt = books.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishListInt);
    }, [books]);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
            <div className="grid grid-cols-3">
                {
                readList.map(book => <Book book={book}></Book>)
            }
            </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3">
                {
                wishList.map(book => <Book book={book}></Book>)
            }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
