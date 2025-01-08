import PropTypes from 'prop-types';

function Sample({ samples = [] }) {
  if (!samples.length) {
    return <div>No data found.</div>;
  }

  return (
    <div>
      <ul>
        {samples.map((item) => (
          <li key={item.slug.current}>
            <span>{item.title}</span>
            <span>{item.publishedAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Sample.propTypes = {
  samples: PropTypes.array.isRequired,
};

export default Sample;
