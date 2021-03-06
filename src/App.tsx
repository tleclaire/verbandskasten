import './App.css';

import React from 'react';

import { Page1 } from './Components/Pages/Page1';
import { Page10 } from './Components/Pages/Page10';
import { Page11 } from './Components/Pages/Page11';
import { Page12 } from './Components/Pages/Page12';
import { Page2 } from './Components/Pages/Page2';
import { Page3 } from './Components/Pages/Page3';
import { Page4 } from './Components/Pages/Page4';
import { Page5 } from './Components/Pages/Page5';
import { Page6 } from './Components/Pages/Page6';
import { Page7 } from './Components/Pages/Page7';
import { Page8 } from './Components/Pages/Page8';
import { Page9 } from './Components/Pages/Page9';
import PersonType from './Components/PersonType';

type MainProps = {};
type MainState = {
  currentPage: number;
  currentPersonType: PersonType;
  currentFrequency: String;
  previousPage: number;
  pageHistory: Array<number>;
};

export default class Main extends React.Component<MainProps, MainState> {
  constructor (props: MainProps) {
    super(props);
    this.state = { currentPersonType: PersonType.Unknown, currentFrequency: "", currentPage: 1, previousPage: 0, pageHistory: new Array<number>() };
  }
  render(): React.ReactElement {
    return (
      <div className="App">
        {(() => {
          switch (this.state.currentPage) {
            case 1:
              return (
                <Page1
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page1>
              );
            case 2:
              return (
                <Page2
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page2>
              );
            case 3:
              return (
                <Page3
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page3>
              );
            case 4:
              return (
                <Page4
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page4>
              );
            case 5:
              return (
                <Page5
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page5>
              );
            case 6:
              return (
                <Page6
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page6>
              );
            case 7:
              return (
                <Page7
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page7>
              );
            case 8:
              return (
                <Page8
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page8>
              );
            case 9:
              return (
                <Page9
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page9>
              );
            case 10:
              return (
                <Page10
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page10>
              );
            case 11:
              return (
                <Page11
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page11>
              );
            case 12:
              return (
                <Page12
                  name={"Wir sind auf Page " + this.state.currentPage}
                  personType={this.state.currentPersonType}
                  frequency={this.state.currentFrequency}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  goBack={this.goBack.bind(this)}
                ></Page12>
              );
            default:
              break;
          }
        })()}
      </div>
    );
  }

  private setCurrentPage(openPage: number, personType: PersonType, frequency: String): void {
    let history: Array<number> = this.state.pageHistory;
    let localFrequency: String = "";
    if (frequency !== "") {
      localFrequency = frequency;
    }
    let localPersontype: PersonType = PersonType.Unknown;
    if (personType !== PersonType.Unknown) {
      localPersontype = personType;
    }
    history.push(this.state.currentPage);
    this.setState({ currentPage: openPage, currentPersonType: localPersontype, pageHistory: history, currentFrequency: localFrequency });
  }
  private goBack(): void {
    let history: Array<number> = this.state.pageHistory;
    let safeCurrentPage: number | undefined = history.pop();
    if (safeCurrentPage) {
      this.setState({ currentPage: safeCurrentPage, pageHistory: history });
    } else {
      this.setState({ currentPage: 1, pageHistory: history });
    }
  }
}
