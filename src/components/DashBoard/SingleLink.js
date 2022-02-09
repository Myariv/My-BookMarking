import faviconFetch from 'favicon-fetch';

const SingleLink = (props) => {
  return (
    <li>
      <img src={faviconFetch({ uri: props.URL })} alt='{props.title} icon' />
      <a href={props.URL}>{props.title}</a>
    </li>
  );
};

export default SingleLink;
