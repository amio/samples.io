import React from 'react'
import PageWrapper from '../components/layout-default'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      preview: `/statics/previewID/preview.jpg`,
      sources: [
        {
          file: '/statics/aaa.jpg',
          meta: 'F2.0'
        }
      ]
    }
  }
  render () {
    return (
      <PageWrapper>
        <div className='wrapper'>
          <div className='column-left'>
            <div className='preview'></div>
          </div>
          <div className='column-right'>
            <div className='sources'>
              <div className='sample'></div>
              <div className='sample add'></div>
            </div>
          </div>
        </div>
        <style>{`
          .wrapper {
            display: flex;
          }
          .column-left, .column-right {
            flex: 1;
          }
          .preview {
            min-height: 320px;
            margin: 1rem 0;
            background-color: #F6F6F6;
            border: 1px dashed #CCC;
            box-sizing: border-box;
          }
          .sample {
            width: 260px;
            height: 180px;
            background: #EEE;
            margin: 1rem 0 0 1rem;
            display: inline-block;
            box-sizing: border-box;
          }
          .sample.add {
            border: 1px dashed #CCC;
            cursor: pointer;
          }
          .sample.add:hover {
            border-style: solid;
          }
        `}</style>
      </PageWrapper>
    )
  }
}
