import faviconFetch from 'favicon-fetch';

const SingleLink = (props) => {
  return (
    <li>
      <img src={faviconFetch({ uri: 'https://www.youtube.com/' })} alt='google' />
      <a href='https://www.youtube.com/'>YouTube</a>
    </li>
  );
};

export default SingleLink;
