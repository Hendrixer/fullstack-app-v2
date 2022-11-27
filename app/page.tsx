export default function Page() {
  return (
    <main>
      <div className="card">
        <div className="header cell">
          <div>
            <h3>Team Members</h3>
          </div>

          <div className="more">See all</div>
        </div>
        <div className="team-list">
          {new Array(5).fill(1).map(() => (
            <div className="teammate cell">hello</div>
          ))}
        </div>
      </div>
    </main>
  )
}
