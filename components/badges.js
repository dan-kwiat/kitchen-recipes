const Badges = ({ quantity, time }) => {
  return (
    <div>
      <span className='badge'>
        <img src="/static/icons/people.svg" alt="People Icon"/> {quantity}
      </span>
      <span className='badge'>
        <img src="/static/icons/clock.svg" alt="Clock Icon"/> {time}
      </span>
      <style jsx>{`
        div {
          margin 1em 0;
        }
        .badge {
          padding: .7em;
          display: inline-block;
          border: 1px solid #fafafa;
          border-radius: 0.4em;
          margin-top: .3em;
          margin-bottom: .3em;
          margin-right: 1em;
          background: #fafafa
        }
        .badge img {
          vertical-align: middle;
          margin: 0 .2em .2em 0;
        }
      `}</style>
    </div>
  )
}

export default Badges
