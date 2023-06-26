export default function HeroBanner() {

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-10 bg-emerald-500">
        <div className="flex flex-col flex-1 bg-emerald-600">
            <h1>Know Your Stars using AI</h1>
            <p>Get insights on your personality, Relationship & career based on numerology & astrology.</p>
            <p>Get Started Button</p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center">
            <div className="bg-cyan-950 min-h-full min-w-full">
                Hero Image goes here
            </div>
        </div>
    </div>
)
}
