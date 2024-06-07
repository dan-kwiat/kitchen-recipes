export default function Youtube({ id, start, end }) {
  const urlParams = new URLSearchParams({
    start: start,
    end: end,
  })
  return (
    <iframe
      className="w-full"
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${id}?${urlParams}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  )
}
