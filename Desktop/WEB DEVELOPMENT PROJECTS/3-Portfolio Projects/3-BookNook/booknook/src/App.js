import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
// require("dotenv").config();

function App() {
  const [state, setState] = useState({});
  const [search, setSearch] = useState("");
  const [inputState, setInputState] = useState("javascript");

  // const onSearchChange = (e) => {
  //   console.log(e.target.value);
  //   setSearch(e.target.value);
  // };

  const handleSearchForm = (e) => {
    e.preventDefault();
    console.log(e);
    setSearch(e.target[0].value);
  };

  const handleInput = (e) => {
    if (e.target.value === "Enter") {
      handleSearchForm();
    }
    setInputState(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_APIKEY}` +
            "&maxResults=40"
        );

        // const response = await axios.get(
        //   `https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBodXWQ8n3L5UdmTG_ox2viEltOH7CQ7pU&maxResults=40`
        // );
        console.log(response.data.items);
        response.data.items.forEach((element) => {
          console.log(element.volumeInfo.title);
        });
        await setState(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);

  console.log(`${process.env.REACT_APP_APIKEY}`);

  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          <h3 className="logo">BookNook</h3>
        </div>

        {/* <div className="menu">
          <ul className="menuList">
            <li className="menuItem"></li>
            <li className="menuItem"></li>
            <li className="menuItem"></li>
            <li className="menuItem"></li>
          </ul>
        </div> */}
        <div className="search-bar">
          <form action="" onSubmit={handleSearchForm}>
            <input
              type="text"
              placeholder="Search for Books"
              onChange={handleInput}
              value={inputState}
            />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </div>

      {/* <div className="card-container">
        {state.data &&
          state.data.items.map((element, i) => {
            return (
              <div className="cardBox">
                <Card
                  key={element.id}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  link={element.volumeInfo.previewLink}
                ></Card>
                {i++}
                <Card
                  key={element.id}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                ></Card>
                {i++}
                <Card
                  key={element.id}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                ></Card>
              </div>
            );
          })}
      </div> */}

      {/* <div className="card-container">
        {state.data &&
          state.data.items.map((element, i) => {
            return (
              <div className="cardBox">
                <Card
                  key={`card-${i}-1`}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  link={element.volumeInfo.previewLink}
                ></Card>

                <Card
                  key={`card-${i}-2`}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                ></Card>

                <Card
                  key={`card-${i}-3`}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.authors}
                  image={
                    element.volumeInfo.imageLinks
                      ? element.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                ></Card>
              </div>
            );
          })}
      </div> */}

      <div className="card-container">
        {state.data &&
          state.data.items.map((element, i) => {
            if ((i + 1) % 3 === 0) {
              return (
                <div className="cardBox">
                  <Card
                    key={i}
                    title={element.volumeInfo.title}
                    author={element.volumeInfo.authors}
                    image={
                      element.volumeInfo.imageLinks
                        ? element.volumeInfo.imageLinks.thumbnail
                        : ""
                    }
                    link={element.volumeInfo.previewLink}
                  ></Card>

                  <Card
                    key={i - 1}
                    title={state.data.items[i - 1].volumeInfo.title}
                    author={state.data.items[i - 1].volumeInfo.authors}
                    image={
                      state.data.items[i - 1].volumeInfo.imageLinks
                        ? state.data.items[i - 1].volumeInfo.imageLinks
                            .thumbnail
                        : ""
                    }
                    link={state.data.items[i - 1].volumeInfo.previewLink}
                  ></Card>

                  <Card
                    key={i - 2}
                    title={state.data.items[i - 2].volumeInfo.title}
                    author={state.data.items[i - 2].volumeInfo.authors}
                    image={
                      state.data.items[i - 2].volumeInfo.imageLinks
                        ? state.data.items[i - 2].volumeInfo.imageLinks
                            .thumbnail
                        : "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                    }
                    link={state.data.items[i - 2].volumeInfo.previewLink}
                  ></Card>
                </div>
              );
            } else {
              return (
                <div className="cardBox">
                  {/* <Card
                    key={`card-${i}-2`}
                    title={element.volumeInfo.title}
                    author={element.volumeInfo.authors}
                    image={
                      element.volumeInfo.imageLinks
                        ? element.volumeInfo.imageLinks.thumbnail
                        : ""
                    }
                  ></Card>

                  <Card
                    key={`card-${i}-3`}
                    title={state.data.items[i + 1].volumeInfo.title}
                    author={state.data.items[i + 1].volumeInfo.authors}
                    image={
                      state.data.items[i + 1].volumeInfo.imageLinks
                        ? state.data.items[i + 1].volumeInfo.imageLinks
                            .thumbnail
                        : ""
                    }
                  ></Card>

                  <Card
                    key={`card-${i}-4`}
                    title={state.data.items[i + 2].volumeInfo.title}
                    author={state.data.items[i + 2].volumeInfo.authors}
                    image={
                      state.data.items[i + 2].volumeInfo.imageLinks
                        ? state.data.items[i + 2].volumeInfo.imageLinks
                            .thumbnail
                        : ""
                    }
                  ></Card> */}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
