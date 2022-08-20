import TopBar from "./TopBar";

export default function Base(props: { children: any}) {
  return (
    <div className="base">
      <TopBar />
      { props.children }
    </div>
  )
}
