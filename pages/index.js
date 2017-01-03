import Page from '../components/layout-default'
import Link from 'next/link'

export default () => (
  <Page>
    <div>Click <Link href='/preview'><a>here</a></Link> to read more</div>
  </Page>
)
