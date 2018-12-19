import { withRouter } from 'next/router'

import Layout from '../components/MyLayout.js'

// withRouter function inject Next.js router as a property
const Content = withRouter((props) => {

    console.log(props.router.query.title)
    return (
        <div>
            <h1>{props.router.query.title}</h1>
            <p>This is the blog post content.</p>
        </div>
    )
})


const Page = () => (
    <Layout>
        <Content />
    </Layout>
)

export default Page