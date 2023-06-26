export default function Header() {
  return (
    <div className="flex flex-row items-center justify-center align-top bg-zinc-500">
      <div>
        <h2>Project Name</h2>
      </div>
      <div className="flex flex-row flex-auto justify-end space-x-5 bg-zinc-400">
        <div>About</div>
        <div>Pricing</div>
        <div>Get started</div>
      </div>
    </div>
  )
}
