import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './partials/Header';
import Home from './pages/HomePage/Home';
import Kampsteri from './pages/KampsteriPage/Kampsteri';
import Newsfeed from './pages/NewsfeedPage/Newsfeed.js';
import PonudaKurseva from './pages/PonudaKursevaPage/PonudaKurseva';
import Ucenje from './pages/UcenjePage/Ucenje';
import Forum from './pages/ForumPage/Forum';
import InfoTabla from './pages/InfoTablaPage/InfoTabla';
import BizEdu from './pages/BizEduPage/BizEdu';
import SviKursevi from './pages/SviKurseviPage/SviKursevi';
import Akcija from './pages/AkcijaPage/Akcija';
import Edupass from './pages/EdupassPage/Edupass';
import Pregled from './pages/PregledPage/Pregled';
import StartujUcenje from './pages/StartujUcenjePage/StartujUcenje';
import Aktivnosti from './pages/AktivnostiPage/Aktivnosti';
import NajKampsteri from './pages/NajKampsteriPage/NajKampsteri';
import KamGrupe from './pages/KamGrupePage/KamGrupe';
import T from 'i18n-react';

const supportedLang = ['rs', 'hr'];
const defaultLang = require(`./languages/en.json`)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language : 'rs'
    }
}

componentDidMount = () => {
  let lang = window.location.pathname.slice(1, 3)
  this.setState({
    language : lang
  })

  supportedLang.indexOf(lang) !== -1 ? T.setTexts(require(`./languages/${lang}.json`)) : T.setTexts(defaultLang);
}

  render() {
    return (
      <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/newsfeed' component={Newsfeed} />
            <Route path='/newsfeed/forum' component={Forum} />
            <Route path='/newsfeed/info' component={InfoTabla} />
            <Route path='/newsfeed/biz' component={BizEdu} />
            <Route exact path='/ponuda' component={PonudaKurseva} />
            <Route path='/ponuda/kursevi' component={SviKursevi} />
            <Route path='/ponuda/akcija' component={Akcija} />
            <Route path='/ponuda/edupass' component={Edupass} />
            <Route exact path='/ucenje' component={Ucenje} />
            <Route path='/ucenje/pregled' component={Pregled} />
            <Route path='/ucenje/start' component={StartujUcenje} />
            <Route path='/ucenje/aktivnosti' component={Aktivnosti} />
            <Route exact path='/kampsteri' component={Kampsteri} />
            <Route path='/kampsteri/najkampsteri' component={NajKampsteri} />
            <Route path='/kampsteri/kampgrupe' component={KamGrupe} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;

