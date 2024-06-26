import './index.css';
import Nav from './components/Nav';
import SectionApropos from './components/SectionApropos';
import SectionExp from './components/SectionExp';
import SectionFormation from './components/SectionFormation';
import SectionCompetences from './components/SectionCompetences';
import SectionReaperso from './components/SectionReaperso';
import SectionInterets from './components/SectionInterets';

function App() {
  return (
    <div>
      <Nav/>
      <div className="container-fluid p-0">
        <SectionApropos/>
        <hr className="m-0"></hr>
        <SectionExp/>
        <hr className="m-0"></hr>
        <SectionFormation/>
        <hr className="m-0"></hr>
        <SectionCompetences/>
        <hr className="m-0"></hr>
        <SectionReaperso/>
        <hr className="m-0"></hr>
        <SectionInterets/>
        <hr className="m-0"></hr>
      </div>
    </div>
  );
}

export default App;
