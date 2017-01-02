import React from 'react'
import Head from 'next/head'
export default () => (
  <Head>
    <style>{`
      body, html {
        background: #FFF;
        font: 14px menlo;
        color: #333;
        margin: 0;
      }

      .content-wrapper {
        width: 1000px;
        margin: 0 auto;
      }
    `}</style>
  </Head>
)
