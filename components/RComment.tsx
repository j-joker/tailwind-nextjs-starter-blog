'use client'

import { ReactCusdis } from 'react-cusdis'

export default function Comments() {
  return (
    <ReactCusdis
      attrs={{
        host: 'https://cusdis.simpleone.fun',
        appId: 'cb044c75-374b-4e18-b419-5a0faeff2b29',
        pageId: 'PAGE_ID',
        pageTitle: 'PAGE_TITLE',
        pageUrl: 'PAGE_URL',
      }}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
