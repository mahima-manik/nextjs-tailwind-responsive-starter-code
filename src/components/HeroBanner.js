export default function HeroBanner() {

  return (
    <div className="flex flex-row bg-emerald-500">
        <div className="flex flex-col w-1/2">
            <h1>Know Your Stars using AI</h1>
            <p>Get insights on your personality, Relationship & career based on numerology & astrology.</p>
            <p>Get Started Button</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
            <div className="bg-cyan-950 min-h-full min-w-full">
                Hero Image goes here
            </div>
        </div>
    </div>
)
}