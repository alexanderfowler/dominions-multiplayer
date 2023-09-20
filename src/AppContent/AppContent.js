import './AppContent.css';
import ContentPageHeader from "../CommonAssets/ContentPageHeader";
import ContentSectionHeader from "../CommonAssets/ContentSectionHeader";
import apkalluPretenderLhs from './apkalluPretenderLhs.png'
import apkalluPretenderRhs from './apkalluPretenderRhs.png'
import archAngelRhs from './archAngelRhs.png'
import archAngelLhs from './archAngelLhs.png'
import melqartLhs from './melqartLhs.png'
import melqartRhs from './melqartRhs.png'

function AppContent() {
    return (
        <div className="App-content">
            <ContentPageHeader sectionHeaderText="Welcome to dominions multiplayer!"></ContentPageHeader>
            <div>
              <p className="Paragraph">Some placeholder text</p>
            </div>
            <ContentSectionHeader sectionHeaderText="Creating A New Game" leftSidePicture={apkalluPretenderLhs} rightSidePicture={apkalluPretenderRhs}></ContentSectionHeader>
            <p className="Paragraph">Some placeholder text</p>
            <ContentSectionHeader sectionHeaderText="Joining An Open Game" leftSidePicture={archAngelLhs} rightSidePicture={archAngelRhs}
            ></ContentSectionHeader>
            <p className="Paragraph">Some placeholder text</p>
            <ContentSectionHeader sectionHeaderText="Connecting Your Client To The Game" leftSidePicture={melqartLhs} rightSidePicture={melqartRhs}></ContentSectionHeader>
            <p className="Paragraph">Some placeholder text</p>
        </div>
    );
}

export default AppContent;
