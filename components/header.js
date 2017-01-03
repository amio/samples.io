import React from 'react'
import Head from 'next/head'
export default () => (
  <Head>
    <style>{`
      html {
        font-size: 14px;
      }
      body {
        background: #FFF;
        font: 14px menlo;
        color: #333;
        margin: 0;
      }

      .content-wrapper {
        width: 1200px;
        margin: 0 auto;
      }
    `}</style>
  </Head>
)
