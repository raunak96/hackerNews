import React, { memo, useCallback } from "react";

const Story = memo(({ story: { id, by, title, kids, time, url } }) => {
	const Link = useCallback(
		(url, title) => (
			<a href={url} target="__blank" rel="noreferer">
				{title}
			</a>
		),
		[]
	);
	return (
		<div className="story">
			<div className="story-title">{Link(url, title)}</div>
			<div className="story-info">
				<span>
					by&nbsp;
					{Link(`https://news.ycombinator.com/user?id=${by}`, by)}
				</span>
				|
				<span>
					{new Date(time * 1000).toLocaleDateString("en-IN", {
						day: "numeric",
						month: "long",
						year: "numeric",
						hour: "numeric",
						minute: "numeric",
					})}
				</span>
				|
				<span>
					{Link(
						`https://news.ycombinator.com/item?id=${id}`,
						`${kids && kids.length > 0 ? kids.length : 0} comments`
					)}
				</span>
			</div>
		</div>
	);
});

export default Story;
