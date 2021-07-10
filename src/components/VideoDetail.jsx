const VideoDetail = ({ video }) => {
 
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui container">
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} />
      </div>
      <div className="ui segment ">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
