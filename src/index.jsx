import "./index.css";
import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/navBar";
import getStays from "./api/stays";
import Card from "./components/card";
import Modal from "./components/modal";
import NotFound from "./components/notFound";
import Footer from "./components/footer";

class App extends React.Component {
  state = {
    stays: [],
    result: [],
    currentWindowWidth: 0,
    isExpanded: false,
    isFocused: false,
    isOpened: false,
    searchQuery: "",
    adultGuests: 0,
    childGuests: 0,
  };

  componentDidMount() {
    const stays = getStays();
    this.setState({ stays });
  }

  onSearchPanelClick = (e) => {
    const className = e.target.className;
    const parentClassName = e.target.parentNode.className;
    const isExpanded =
      className === "nav-expanded" ||
      className === "dummy" ||
      parentClassName === "nav-expanded"
        ? false
        : true;
    if (
      e.target.parentNode.tagName === "BUTTON" ||
      e.target.tagName === "BUTTON" ||
      e.target.id
    )
      return;
    this.setState({ isExpanded });
  };

  onModalClick = () => {
    const isExpanded = false;
    this.setState({ isExpanded });
  };

  onWindowScroll = () => {
    if (window.scrollY >= 80) {
      this.setState({ isExpanded: false });
    } else return;
  };

  onGuestsClicked = () => {
    const isOpened = !this.state.isOpened;
    if (this.state.isFocused) this.setState({ isFocused: false, isOpened });
    else {
      this.setState({ isOpened });
    }
  };

  onInputFocused = () => {
    const isFocused = true;
    const isOpened = false;
    this.setState({ isFocused, isOpened });
  };

  onInputChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    const searchQuery = e.target.value;
    this.setState({ searchQuery });
  };

  onLiClick = (e) => {
    const className = e.target.className;
    const searchQuery = e.target.innerText;
    if (className !== "city-name") return;
    const isFocused = false;
    this.setState({ searchQuery, isFocused });
  };

  onGuestNumChanged = (e) => {
    let age = e.target.parentNode.id;
    let selectedGeuests =
      age === "adult" ? this.state.adultGuests : this.state.childGuests;
    e.target.className === "add" ? selectedGeuests++ : selectedGeuests--;
    if (selectedGeuests < 0) return;
    this.setState({ [`${age}Guests`]: selectedGeuests });
  };

  onSearhButtonClick = () => {
    const stays = [...this.state.stays];

    const searchQuery = this.state.searchQuery;
    const query = searchQuery.split(",")[0];

    const people = this.state.adultGuests + this.state.childGuests;

    if (!query && !people) {
      this.setState({ result: stays, isExpanded: false });
      return;
    }

    const result = this.lookForStays(stays, query, people);
    this.setState({ result, isExpanded: false, isOpened: false });
  };

  onCancelIconClick = (e) => {
    const queryId = e.target.id;

    if (queryId.toLowerCase().startsWith("place"))
      this.setState({ searchQuery: "" });

    if (queryId.toLowerCase().startsWith("adult"))
      this.setState({ adultGuests: 0 });

    if (queryId.toLowerCase().startsWith("child"))
      this.setState({ childGuests: 0 });
  };

  lookForStays = (stays, query, people) => {
    let result;
    if (query && !people) {
      result = stays.filter((stay) =>
        stay.city.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    if (!query && people) {
      result = stays.filter((stay) => stay.maxGuests >= people);
    }

    if (query && people) {
      result = stays.filter(
        (stay) =>
          stay.city.toLowerCase().startsWith(query.toLowerCase()) &&
          stay.maxGuests >= people
      );
    }
    if (!result.length) result = {};
    return result;
  };

  render() {
    let stays = !this.state.result.length
      ? this.state.stays
      : this.state.result;

    return (
      <React.Fragment>
        <NavBar
          onPanelClick={this.onSearchPanelClick}
          isExpanded={this.state.isExpanded}
          isFocused={this.state.isFocused}
          onInputFocused={this.onInputFocused}
          stays={stays}
          query={this.state.searchQuery}
          onChange={this.onInputChange}
          onLiClick={this.onLiClick}
          onGuestNumChanged={this.onGuestNumChanged}
          adultGuests={this.state.adultGuests}
          childGuests={this.state.childGuests}
          onGuestsClicked={this.onGuestsClicked}
          isOpened={this.state.isOpened}
          onWindowScroll={this.onWindowScroll}
          onSearhButtonClick={this.onSearhButtonClick}
          onCancelIconClick={this.onCancelIconClick}
          onInputChange={this.onInputChange}
        />
        <main onScroll={this.onWindowScroll}>
          <Modal
            isExpanded={this.state.isExpanded}
            onModalClick={this.onModalClick}
            onWindowScroll={this.onWindowScroll}
          />
          <header>
            <div className="header-title">Stays in Finland</div>
            <div className="stays-counter">
              {!Array.isArray(this.state.result)
                ? "0 Stays"
                : `${stays.length} Stays`}
            </div>
          </header>
          {!Array.isArray(this.state.result) ? (
            <NotFound />
          ) : (
            <div className="show-case">
              <Card stays={stays} />
            </div>
          )}
          <footer>
            <Footer />
          </footer>
        </main>
      </React.Fragment>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
