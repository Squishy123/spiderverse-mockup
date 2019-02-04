import Head from 'next/head';

export default class PageHead extends React.Component {
    render() {
        return (
            <Head>
                <title>{this.props.pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <link rel="icon" href="/static/assets/logos/favicon.png" />
                {
                    //Normalize.css
                    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
                }
                {
                    //Fonts
                    <link href="https://fonts.googleapis.com/css?family=Lato:100|Montserrat:medium|Raleway|Source+Sans+Pro|Noto+Serif+SC" rel="stylesheet" />
                }
                
            </Head>
        )
    }
}