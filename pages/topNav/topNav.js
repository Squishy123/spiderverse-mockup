import topNavStyles from './topNav.scss';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);

        //set initial states
        this.state = {
            toggle: ""
        };
    }


    render() {
        return (
            <div className={topNavStyles.topNavContainer}>
                <div className={topNavStyles.arrowContainer}>
                    <div className={topNavStyles.arrow} />
                </div>
            </div>
        )
    }
}