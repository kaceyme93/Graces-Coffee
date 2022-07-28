import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../style/FrontPage.css';

function FrontPage() {
  let history = useHistory();

  return (
    <>
      <div className='hero'>
        <h1>Coffee for everyone!</h1>
        <p>Try some of the best coffee from the Chicago area and beyond</p>
        <Button
          variant='primary'
          type='submit'
          size='lg'
          className='front-page-button'
          onClick={() => {
            history.push('./products');
          }}
        >
          Start Shopping
        </Button>
      </div>
    </>
  );
}

export default FrontPage;
