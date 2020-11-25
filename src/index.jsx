import React from "react";
import ReactDom from "react-dom";
import NavBar from "./components/navBar";
import getStays from "./api/stays";
import Card from "./components/card";
import Modal from "./components/modal";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import ResultNumIndicator from "./components/common/resultNumIndicator";
import "./index.css";

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

  onSearchPanelClick = () => {
    this.setState({ isExpanded: true });
  };

  onExpandedNavClick = (e) => {
    const closingFactors = [
      "panels",
      "nav-expanded",
      "dummy",
      "selectors",
      "nav-responsive",
    ];
    const parentClassName = e.target.parentNode.className;
    const className = e.target.className;
    const id = e.target.id;

    if (parentClassName === "search-panel-expanded" || id) return;

    if (closingFactors.includes(className)) {
      this.setState({ isExpanded: false });
      return;
    }
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

  onLiClick = (city, country) => {
    const searchQuery = `${city}, ${country}`;
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

    if (queryId === "place") this.setState({ searchQuery: "" });

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
          isExpanded={this.state.isExpanded}
          isFocused={this.state.isFocused}
          stays={stays}
          query={this.state.searchQuery}
          adultGuests={this.state.adultGuests}
          childGuests={this.state.childGuests}
          isOpened={this.state.isOpened}
          onChange={this.onInputChange}
          onSearchPanelClick={this.onSearchPanelClick}
          onExpandedNavClick={this.onExpandedNavClick}
          onInputFocused={this.onInputFocused}
          onLiClick={this.onLiClick}
          onGuestNumChanged={this.onGuestNumChanged}
          onWindowScroll={this.onWindowScroll}
          onSearhButtonClick={this.onSearhButtonClick}
          onCancelIconClick={this.onCancelIconClick}
          onInputChange={this.onInputChange}
          onGuestsClicked={this.onGuestsClicked}
        />
        <main onScroll={this.onWindowScroll}>
          <Modal
            isExpanded={this.state.isExpanded}
            onModalClick={this.onModalClick}
            onWindowScroll={this.onWindowScroll}
            opacity={0.4}
            zIndex={1}
          />
          <header>
            <div className="header-title">Stays in Finland</div>
            <ResultNumIndicator result={this.state.result} stays={stays} />
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
