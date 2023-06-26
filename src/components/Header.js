export default function Header() {
  return (
    <div className="flex flex-row items-center justify-center align-top bg-zinc-500">
      <div>
        <h2>ASTROTELLER</h2>
      </div>
      <div className="flex flex-row flex-auto justify-end space-x-5 bg-zinc-400">
        <div>about</div>
        <div>pricing</div>
        <div>get started button</div>
      </div>
    </div>
  )
}
