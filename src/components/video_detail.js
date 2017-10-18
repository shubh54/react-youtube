import React from "react";

export const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading..</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-md-8">
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"></iframe>
                </div>
            </div>
            <div className="details">
                <div className="video-title">{video.snippet.title}</div>
                <div className="video-description">{video.snippet.description}</div>
            </div>
        </div>
    );
}