import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelect}) => {

  const renderedList = videos.map((v)=>{return <VideoItem video={v} key={v.id.videoId} onVideoSelect={onSelect}></VideoItem>});

  return (<div className="ui relaxed divided list">
       {renderedList}
      </div>);
};


export default VideoList;
