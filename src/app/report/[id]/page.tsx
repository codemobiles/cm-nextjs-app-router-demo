import React from "react";

type Props = {
  params: any;
};

export default function Report({ params }: Props) {
  return <div>Report Id: {params.id}</div>;
}
