import React from 'react';


const VideoDetail = ({selvideo}) =>{
  if (!selvideo){
  return <div>Loading...</div>
}

  const videoSrc = `https://www.youtube.com/embed/${selvideo.id.videoId}`;
  return (
        <div>
           <div className="ui embed">
              <iframe title="video player"src={videoSrc}></iframe>
           </div>            
           <div className="ui segment">          
               <h4 className="ui header">{selvideo.snippet.title}</h4>
               <p>{selvideo.snippet.description}</p>
           </div>
           
        </div>
);
};


export default VideoDetail;