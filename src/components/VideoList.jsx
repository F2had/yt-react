import VideoItem from './VideoItme';

const List = ({ videos, onVideoSelect }) => {

  let list = videos.map((item, index) => {
    return <VideoItem onVideoSelect={onVideoSelect} key={index} video={item} />;
  });

  return (
    <div className="ui segment container">
      <div className="ui relaxed divided list">{list}</div>
    </div>
  );
};

export default List;
