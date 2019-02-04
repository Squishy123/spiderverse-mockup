import PageHead from './pageHead/pageHead';

import TopNav from './topNav/topNav';

import appStyles from './appStyles.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className={appStyles.main}>
                <PageHead pageTitle={"Enter the SpiderVerse"} />
                <div className={appStyles.view}>
                    <TopNav />
                    {//characters
                    }
                </div>
            </div>)
    }
}