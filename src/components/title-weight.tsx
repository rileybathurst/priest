import * as React from "react";

function TitleWeight({ title, shortname, wrap }: { title: string, shortname: string, wrap: string }) {
  // take the title and if the shortname is nested inside wrap it in a span
  const titleWithSpan = title.replace(shortname, `<span class="cruiserweight">${shortname}</span>`);

  const Wrap = wrap || 'div';

  return (
    <Wrap dangerouslySetInnerHTML={{ __html: titleWithSpan }} className="title-weight" />
  )
}

export default TitleWeight;
